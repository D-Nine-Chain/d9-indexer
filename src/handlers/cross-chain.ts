import { Store } from '@subsquid/typeorm-store'
import { ProcessorContext } from '../processor'
import { BaseEntity, isContractsEvent, ss58Encode } from '../utils'
import { ContractAddress } from '../constant'
import * as CrossChain from '../abi/cross-chain'
import { CrossChainCommitment, CrossChainDispatch } from '../model'
import { getAccounts } from './account'

type Commitment = {
  txId: string
  from: string
  amount: bigint
} & BaseEntity

type Dispatch = {
  txId: string
  to: string
  amount: bigint
} & BaseEntity

// untested

export async function handleCrossChainContractEvent(ctx: ProcessorContext<Store>) {
  const entities = [] as (Commitment | Dispatch)[]
  for await (const block of ctx.blocks) {
    for await (const event of block.events) {
      if (isContractsEvent(event, ContractAddress.CROSS_CHAIN)) {
        const decoded = CrossChain.decodeEvent(event.args.data)
        switch (decoded.__kind) {
          case 'CommitCreated':
            entities.push({
              id: event.id,
              blockNumber: block.header.height,
              timestamp: new Date(block.header.timestamp!),
              extrinsicHash: event.extrinsic?.hash,
              txId: decoded.transactionId,
              from: decoded.fromAddress,
              amount: decoded.amount,
            })
            break
          case 'DispatchCompleted':
            entities.push({
              id: event.id,
              blockNumber: block.header.height,
              timestamp: new Date(block.header.timestamp!),
              extrinsicHash: event.extrinsic?.hash,
              txId: decoded.txId,
              to: decoded.toAddress,
              amount: decoded.amount,
            })
            break
        }
      }
    }
  }

  const accounts = await getAccounts(ctx, entities.map((entity: any) => entity.from || entity.to))

  await ctx.store.insert(entities.map((entity) => {
    if ('to' in entity) {
      return new CrossChainDispatch({
        ...entity,
        to: accounts.find(account => account.id === ss58Encode(entity.to)),
      })
    }
    return new CrossChainCommitment({
      ...entity,
      from: accounts.find(account => account.id === ss58Encode(entity.from)),
    })
  }))
}
