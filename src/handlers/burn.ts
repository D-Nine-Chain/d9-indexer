import { Store } from '@subsquid/typeorm-store'
import { ProcessorContext } from '../processor'
import { Account, Burn } from '../model'
import { events } from '../types'
import { BaseEntity, ss58Encode } from '../utils'
import { getAccounts } from './account'

type BurnRecord = {
  fee: bigint
  who: string
  amount: bigint
} & BaseEntity

export async function handleBurnEvents(ctx: ProcessorContext<Store>) {
  const entities: BurnRecord[] = []
  for (const block of ctx.blocks) {
    for (const event of block.events) {
      if (event.name === events.balances.burned.name) {
        const rec = events.balances.burned.v110.decode(event)
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
    return new Burn({
      ...entity,
      who: accounts.find(account => account.id === ss58Encode(entity.who)),
    })
  }))
}
