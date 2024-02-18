import assert from 'assert'
import { Store } from '@subsquid/typeorm-store'
import { In } from 'typeorm'
import { ProcessorContext } from '../processor'
import { Account, Transfer } from '../model'
import { events } from '../types'
import { ss58Encode } from '../utils'

interface TransferEvent {
  id: string
  blockNumber: number
  timestamp: Date
  extrinsicHash?: string
  from: string
  to: string
  amount: bigint
  fee?: bigint
}

export async function handleTransferEvents(ctx: ProcessorContext<Store>) {
  const transferEvents: TransferEvent[] = getTransferEvents(ctx)

  const accounts: Map<string, Account> = await createAccounts(ctx, transferEvents)
  const transfers: Transfer[] = createTransfers(transferEvents, accounts)

  await ctx.store.upsert([...accounts.values()])
  await ctx.store.insert(transfers)
}

function getTransferEvents(ctx: ProcessorContext<Store>): TransferEvent[] {
  const transfers: TransferEvent[] = []
  for (const block of ctx.blocks) {
    for (const event of block.events) {
      if (event.name === events.balances.transfer.name) {
        let rec: { from: string, to: string, amount: bigint }
        if (events.balances.transfer.v112.is(event)) {
          rec = events.balances.transfer.v112.decode(event)
        }
        else {
          throw new Error('Unsupported spec')
        }

        assert(block.header.timestamp, `Got an undefined timestamp at block ${block.header.height}`)

        transfers.push({
          id: event.id,
          blockNumber: block.header.height,
          timestamp: new Date(block.header.timestamp),
          extrinsicHash: event.extrinsic?.hash,
          from: ss58Encode(rec.from),
          to: ss58Encode(rec.to),
          amount: rec.amount,
          fee: event.extrinsic?.fee || 0n,
        })
      }
    }
  }
  return transfers
}

async function createAccounts(ctx: ProcessorContext<Store>, transferEvents: TransferEvent[]): Promise<Map<string, Account>> {
  const accountIds = new Set<string>()
  for (const t of transferEvents) {
    accountIds.add(t.from)
    accountIds.add(t.to)
  }

  const accounts = await ctx.store.findBy(Account, { id: In([...accountIds]) }).then((accounts) => {
    return new Map(accounts.map(a => [a.id, a]))
  })

  for (const t of transferEvents) {
    updateAccounts(t.from)
    updateAccounts(t.to)
  }

  function updateAccounts(id: string): void {
    const acc = accounts.get(id)
    if (acc == null) {
      accounts.set(id, new Account({ id }))
    }
  }

  return accounts
}

function createTransfers(transferEvents: TransferEvent[], accounts: Map<string, Account>): Transfer[] {
  const transfers: Transfer[] = []
  for (const t of transferEvents) {
    const { id, blockNumber, timestamp, extrinsicHash, amount, fee } = t
    const from = accounts.get(t.from)
    const to = accounts.get(t.to)
    transfers.push(new Transfer({
      id,
      blockNumber,
      timestamp,
      extrinsicHash,
      from,
      to,
      amount,
      fee,
    }))
  }
  return transfers
}
