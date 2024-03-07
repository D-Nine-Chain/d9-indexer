import { Store } from '@subsquid/typeorm-store'
import { ProcessorContext } from '../processor'
import { BaseEntity, isContractsEvent, ss58Encode } from '../utils'
import { ContractAddress } from '../constant'
import * as BurnManager from '../abi/burn-manager'
import { Burn, BurnWithdrawal } from '../model'
import { getAccounts } from './account'

type _Record = {
  from: string
  amount: bigint
  fee: bigint
  type: 'BurnExecuted' | 'WithdrawalExecuted'
} & BaseEntity

export async function handleBurnManagerContract(ctx: ProcessorContext<Store>) {
  const entities = [] as _Record[]
  for await (const block of ctx.blocks) {
    for await (const event of block.events) {
      if (!event.extrinsic?.success)
        continue
      if (isContractsEvent(event, ContractAddress.BURN_MANAGER)) {
        const decoded = BurnManager.decodeEvent(event.args.data)
        console.info(decoded)
        entities.push({
          id: event.id,
          blockNumber: event.block.height,
          timestamp: new Date(event.block.timestamp!),
          extrinsicHash: event.extrinsic?.hash,
          fee: event.extrinsic?.fee ?? 0n,
          from: decoded.from,
          amount: decoded.amount,
          type: decoded.__kind,
        })
        // switch (event.__kind) {
        //   case 'WithdrawalExecuted':
        //     // event.
        //     break
        //   case 'BurnExecuted':
        //     // event.
        //     break
        // }
      }
    }
  }

  const accounts = await getAccounts(ctx, entities.map(entity => entity.from))

  await ctx.store.insert(entities.filter(({ type }) => type === 'BurnExecuted').map(entity => new Burn({
    ...entity,
    from: accounts.find(account => account.id === ss58Encode(entity.from)),
  })))

  await ctx.store.insert(entities.filter(({ type }) => type === 'WithdrawalExecuted').map(entity => new BurnWithdrawal({
    ...entity,
    from: accounts.find(account => account.id === ss58Encode(entity.from)),
  })))
}
