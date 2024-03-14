import { Store } from '@subsquid/typeorm-store'
import { ProcessorContext } from '../processor'
import { BaseEntity } from '../utils'
import { getAccounts } from '../handlers/account'
import { Token, Transfer } from '../model'

export function usdtSaver(ctx: ProcessorContext<Store>) {
  type _Tansfer = {
    from: string
    to: string
    amount: bigint
    fee: bigint
  } & BaseEntity

  const entities: _Tansfer[] = []

  async function save() {
    const accounts = await getAccounts(ctx, entities.flatMap(entity => [entity.to, entity.from]), true)

    await ctx.store.insert(entities.map((entity) => {
      return new Transfer({
        ...entity,
        from: accounts.find(({ id }) => id === entity.from),
        to: accounts.find(({ id }) => id === entity.to),
        token: Token.USDT,
      })
    }))
  }

  return { entities, save }
}
