import { Entity, Store } from '@subsquid/typeorm-store'
import { ProcessorContext } from '../processor'
import { BaseEntity, isContractsCall, isContractsEvent, ss58Encode } from '../utils'
import { ContractAddress } from '../constant'
import * as D9USDT from '../abi/d9-usdt'
import { CrossChainCommitment, CrossChainDispatch } from '../model'
import { getAccounts } from './account'

type Tansfer = {
  to: string
  value: bigint
} & BaseEntity

// untested

export async function handleD9USDTContractEvent(ctx: ProcessorContext<Store>) {
  const entities = [] as Tansfer[]
  for await (const block of ctx.blocks) {
    for await (const call of block.calls) {
      if (isContractsCall(call, ContractAddress.D9_USDT)) {
        const decoded = D9USDT.decodeMessage(call.args.data)
        switch (decoded.__kind) {
          case 'PSP22_transfer':
            entities.push({
              id: call.id,
              blockNumber: block.header.height,
              extrinsicHash: call.extrinsic?.hash,
              timestamp: new Date(block.header.timestamp!),
              to: decoded.to,
              value: decoded.value,
            })
            break
        }
      }
      // if (isContractsEvent(event, ContractAddress.D9_USDT)) {
      //   const decoded = D9USDT.decodeEvent(event.args.data)
      //   switch (decoded.__kind) {
      //     case 'CommitCreated':
      //       entities.push({
      //         id: event.id,
      //         blockNumber: block.header.height,
      //         timestamp: new Date(block.header.timestamp!),
      //         extrinsicHash: event.extrinsic?.hash,
      //         txId: decoded.transactionId,
      //         from: decoded.fromAddress,
      //         amount: decoded.amount,
      //       })
      //       break
      //     case 'DispatchCompleted':
      //       entities.push({
      //         id: event.id,
      //         blockNumber: block.header.height,
      //         timestamp: new Date(block.header.timestamp!),
      //         extrinsicHash: event.extrinsic?.hash,
      //         txId: decoded.txId,
      //         to: decoded.toAddress,
      //         amount: decoded.amount,
      //       })
      //       break
      //   }
      // }
    }
  }

  // const accounts = await getAccounts(ctx, entities.map(entity => entity.to))

  // await ctx.store.insert(entities.map((entity) => {
  //   return new CrossChainCommitment({
  //     ...entity,
  //     from: accounts.find(account => account.id === ss58Encode(entity.from)),
  //   })
  // }))
}
