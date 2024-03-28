import assert from 'assert'
import { Store } from '@subsquid/typeorm-store'
import { In } from 'typeorm'
import { ProcessorContext } from '../processor'
import { Account, Token, Transfer } from '../model'
import { events } from '../types'
import { BaseEntity, ss58Encode } from '../utils'

type TransferEvent = {
  from: string
  to: string
  amount: bigint
  fee: bigint
} & BaseEntity

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
      if (!event.extrinsic?.success)
        continue
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
          blockHash: block.header.hash,
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
    const { id, blockNumber, blockHash, timestamp, extrinsicHash, amount, fee } = t
    const from = accounts.get(t.from)
    const to = accounts.get(t.to)
    if (t.from === 'vMEwWJwYbzgiKeLeu4RwiAd73GVvGijTywfEAbba3pzPiPC' && t.to === 'z8keEeLwjZFK5NS5PF6xYwTHEbm7jwpH4gBYB1JV6pDTtWg') {
      // Useless record, ignore it
      continue
    }
    transfers.push(new Transfer({
      id,
      blockNumber,
      blockHash,
      timestamp,
      extrinsicHash,
      from,
      to,
      amount,
      token: Token.D9,
      fee,
    }))
  }
  return transfers
}
