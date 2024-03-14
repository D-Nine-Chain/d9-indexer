import { Store } from '@subsquid/typeorm-store'
import { ProcessorContext } from '../processor'
import { BaseEntity, isContractsEvent, ss58Encode } from '../utils'
import { ContractAddress } from '../constant'
import * as CrossChain from '../abi/cross-chain-transfer'
import { CrossChainCommitCreated, CrossChainDispatchCompleted } from '../model'
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
      if (!event.extrinsic?.success)
        continue
      try {
        if (isContractsEvent(event, ContractAddress.CROSS_CHAIN)) {
          const decoded = CrossChain.decodeEvent(event.args.data)
          console.info(decoded)
          switch (decoded.__kind) {
            case 'CommitCreated':
              entities.push({
                id: event.id,
                blockNumber: block.header.height,
                blockHash: block.header.hash,
                timestamp: new Date(block.header.timestamp!),
                extrinsicHash: event.extrinsic?.hash,
                txId: decoded.transactionId,
                from: ss58Encode(decoded.fromAddress),
                amount: decoded.amount,
                fee: event.extrinsic.fee ?? 0n,
              })
              break
            case 'DispatchCompleted':
              entities.push({
                id: event.id,
                blockNumber: block.header.height,
                blockHash: block.header.hash,
                timestamp: new Date(block.header.timestamp!),
                extrinsicHash: event.extrinsic?.hash,
                txId: decoded.txId,
                to: ss58Encode(decoded.toAddress),
                amount: decoded.amount,
                fee: event.extrinsic.fee ?? 0n,
              })
              break
          }
        }
      }
      catch (e) {
        console.warn('[handleCrossChainContractEvent]', e)
      }
    }
  }

  const accounts = await getAccounts(ctx, entities.map((entity: any) => entity.from || entity.to), true)

  await ctx.store.insert(entities.filter(entity => 'to' in entity).map(entity => new CrossChainDispatchCompleted({
    ...entity,
    to: accounts.find(account => account.id === (entity as Dispatch).to),
  })))

  await ctx.store.insert(entities.filter(entity => !('to' in entity)).map(entity => new CrossChainCommitCreated({
    ...entity,
    from: accounts.find(account => account.id === (entity as Commitment).from),
  })))
}
