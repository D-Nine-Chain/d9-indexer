import { Store } from '@subsquid/typeorm-store'
import { ProcessorContext } from '../processor'
import { Account, Burn } from '../model'
import { events } from '../types'
import { ss58Encode } from '../utils'
import { getAccounts } from './account'

export async function handleWithdrawEvents(ctx: ProcessorContext<Store>) {
  const entities: Burn[] = []
  for (const block of ctx.blocks) {
    for (const event of block.events) {
      if (event.name === events.balances.withdraw.name) {
        const rec = events.balances.burned.v110.decode(event)
        const accounts = await getAccounts(ctx, [rec.who])
        entities.push(new Burn({
          id: event.id,
          blockNumber: block.header.height,
          timestamp: new Date(block.header.timestamp!),
          extrinsicHash: event.extrinsic?.hash,
          fee: event.extrinsic?.fee || 0n,
          who: accounts[0],
          amount: rec.amount,
        }))
      }
    }
  }
  await ctx.store.insert(entities)
}
