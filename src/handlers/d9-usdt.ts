import { Store } from '@subsquid/typeorm-store'
import { ProcessorContext } from '../processor'
import { BaseEntity, isContractsCall, isContractsEvent, ss58Encode } from '../utils'
import { ContractAddress } from '../constant'
import * as D9USDT from '../abi/d9-usdt'
import { Token, Transfer } from '../model'
import { getAccounts } from './account'

type _Tansfer = {
  from: string
  to: string
  amount: bigint
  fee: bigint
} & BaseEntity

export async function handleD9USDTContract(ctx: ProcessorContext<Store>) {
  const entities = [] as _Tansfer[]
  for await (const block of ctx.blocks) {
    for await (const event of block.events) {
      if (!event.extrinsic?.success)
        continue
      if (isContractsEvent(event, ContractAddress.D9_USDT)) {
        const decoded = D9USDT.decodeEvent(event.args.data)
        switch (decoded.__kind) {
          case 'D9USDTTransfer':
            entities.push({
              id: event.id,
              blockNumber: block.header.height,
              extrinsicHash: event.extrinsic?.hash,
              timestamp: new Date(block.header.timestamp!),
              from: ss58Encode(decoded.from),
              to: ss58Encode(decoded.to),
              amount: decoded.amount,
              fee: event.extrinsic?.fee || 0n,
            })
            break
        }
      }
    }
    // for await (const call of block.calls) {
    //   if (!call.extrinsic?.success)
    //     continue
    //   if (isContractsCall(call, ContractAddress.D9_USDT)) {
    //     const decoded = D9USDT.decodeMessage(call.args.data)
    //     switch (decoded.__kind) {
    //       case 'PSP22_transfer_from':
    //         entities.push({
    //           id: call.id,
    //           blockNumber: block.header.height,
    //           extrinsicHash: call.extrinsic?.hash,
    //           timestamp: new Date(block.header.timestamp!),
    //           from: ss58Encode(decoded.from),
    //           to: ss58Encode(decoded.to),
    //           amount: decoded.value,
    //           fee: call.extrinsic?.fee || 0n,
    //         })
    //         break
    //       case 'PSP22_transfer':
    //         entities.push({
    //           id: call.id,
    //           blockNumber: block.header.height,
    //           extrinsicHash: call.extrinsic?.hash,
    //           timestamp: new Date(block.header.timestamp!),
    //           from: ss58Encode(call.origin.value.value),
    //           to: ss58Encode(decoded.to),
    //           amount: decoded.value,
    //           fee: call.extrinsic?.fee || 0n,
    //         })
    //         break
    //     }
    //   }
    // }
  }

  const accounts = await getAccounts(ctx, entities.map(entity => entity.to), true)

  await ctx.store.insert(entities.map((entity) => {
    return new Transfer({
      ...entity,
      from: accounts.find(({ id }) => id === entity.from),
      to: accounts.find(({ id }) => id === entity.from),
      token: Token.USDT,
    })
  }))
}
