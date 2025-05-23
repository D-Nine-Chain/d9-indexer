import { Store } from '@subsquid/typeorm-store'
import { ProcessorContext } from '../processor'
import { Withdraw } from '../model'
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
      if (!event.extrinsic)
        continue
      if (event.name === events.balances.withdraw.name) {
        const rec = events.balances.withdraw.v112.decode(event)
        entities.push({
          id: event.id,
          blockNumber: block.header.height,
          blockHash: block.header.hash,
          timestamp: new Date(block.header.timestamp!),
          extrinsicHash: event.extrinsic.hash,
          fee: event.extrinsic?.fee || 0n,
          who: ss58Encode(rec.who),
          amount: rec.amount,
          success: event.extrinsic.success,
        })
      }
    }
  }

  const accounts = await getAccounts(ctx, entities.map(({ who }) => who), true)

  await ctx.store.insert(entities.map((entity) => {
    return new Withdraw({
      ...entity,
      who: accounts.find(account => account.id === entity.who),
    })
  }))
}
