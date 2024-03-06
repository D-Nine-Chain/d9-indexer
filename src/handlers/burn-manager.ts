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

  // eslint-disable-next-line array-callback-return
  await ctx.store.insert(entities.map((entity) => {
    switch (entity.type) {
      case 'BurnExecuted':
        return new Burn({
          ...entity,
          from: accounts.find(account => account.id === ss58Encode(entity.from)),
        })
      case 'WithdrawalExecuted':
        return new BurnWithdrawal({
          ...entity,
          from: accounts.find(account => account.id === ss58Encode(entity.from)),
        })
    }
  }))
}
