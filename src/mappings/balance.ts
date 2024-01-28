import assert from 'assert'
import { SubstrateEvent } from '@subql/types'
import { decodeAddress } from '@polkadot/util-crypto'
import { Balance, EventRecord } from '@polkadot/types/interfaces'
import { AugmentedEvents } from '@polkadot/api-base/types'
import { Account, Transfer } from '../types'

// d9 balance

async function checkAndGetAccount(
  id: string,
  blockNumber: number,
): Promise<Account> {
  let account = await Account.get(id.toLowerCase())
  if (!account) {
    // We couldn't find the account
    account = Account.create({
      id: id.toLowerCase(),
      publicKey: decodeAddress(id).toString().toLowerCase(),
      firstTransferBlock: blockNumber,
    })
  }
  return account
}

export async function handlerBalanceDepositEvent(event: SubstrateEvent) {
  // logger.info(`event:${JSON.stringify(event)}`)
  const {
    event: {
      data: [to, amount],
    },
  } = event

  const from = event.extrinsic?.extrinsic.signer
  assert(from, 'Signer is missing')

  const blockNumber: number = event.block.block.header.number.toNumber()

  const fromAccount = await checkAndGetAccount(from.toString(), blockNumber)
  const toAccount = await checkAndGetAccount(to.toString(), blockNumber)

  // Create the new transfer entity
  const transfer = Transfer.create({
    id: `${event.block.block.header.number.toNumber()}-${event.idx}`,
    blockNumber,
    date: event.block.timestamp,
    fromId: fromAccount.id,
    toId: toAccount.id,
    amount: (amount as Balance).toBigInt(),
  })

  fromAccount.lastTransferBlock = blockNumber
  toAccount.lastTransferBlock = blockNumber

  await Promise.all([fromAccount.save(), toAccount.save(), transfer.save()])
}
