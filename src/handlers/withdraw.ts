import { Store } from '@subsquid/typeorm-store'
import { ProcessorContext } from '../processor'
import { Account, Withdraw } from '../model'
import { events } from '../types'
import { BaseEntity, ss58Encode } from '../utils'
import { getAccounts } from './account'

type WithdrawRecord = {
  fee: bigint
  who: string
  amount: bigint
} & BaseEntity

export async function handleWithdrawEvents(ctx: ProcessorContext<Store>) {
  const entities: WithdrawRecord[] = []

  for (const block of ctx.blocks) {
    for (const event of block.events) {
      if (event.name === events.balances.withdraw.name) {
        const rec = events.balances.withdraw.v110.decode(event)
        entities.push({
          id: event.id,
          blockNumber: block.header.height,
          timestamp: new Date(block.header.timestamp!),
          extrinsicHash: event.extrinsic?.hash,
          fee: event.extrinsic?.fee || 0n,
          who: rec.who,
          amount: rec.amount,
        })
      }
    }
  }

  const accounts = await getAccounts(ctx, entities.map(({ who }) => who))

  await ctx.store.insert(entities.map((entity) => {
    return new Withdraw({
      ...entity,
      who: accounts.find(account => account.id === ss58Encode(entity.who)),
    })
  }))
}
