import { Store } from '@subsquid/typeorm-store'
import { ProcessorContext } from '../processor'
import { BaseEntity, isContractsEvent, ss58Encode } from '../utils'
import { ContractAddress } from '../constant'
import * as NodeReward from '../abi/node-reward'
import { NodeRewardPaid } from '../model'
import { getAccounts } from './account'

type _Record = {
  node: string
  receiver: string
  amount: bigint
  kind: NodeReward.Event_NodeRewardPaid['__kind']
} & BaseEntity

export async function handleNodeRewardContract(ctx: ProcessorContext<Store>) {
  const entities = [] as _Record[]
  for await (const block of ctx.blocks) {
    for await (const event of block.events) {
      if (!event.extrinsic?.success)
        continue
      if (isContractsEvent(event, ContractAddress.NODE_REWARD)) {
        const decoded = NodeReward.decodeEvent(event.args.data)
        console.info(decoded)
        entities.push({
          kind: decoded.__kind,
          id: event.id,
          blockNumber: event.block.height,
          blockHash: event.block.hash,
          timestamp: new Date(event.block.timestamp!),
          extrinsicHash: event.extrinsic!.hash,
          fee: event.extrinsic?.fee ?? 0n,
          node: ss58Encode(decoded.node),
          receiver: ss58Encode(decoded.receiver),
          amount: decoded.amount,
        })
      }
    }
  }

  const accounts = await getAccounts(ctx, entities.flatMap(entity => [entity.node, entity.receiver]), true)

  await ctx.store.insert(entities.filter(({ kind }) => kind === 'NodeRewardPaid').map(entity => new NodeRewardPaid({
    ...entity,
    node: accounts.find(account => account.id === entity.node),
    receiver: accounts.find(account => account.id === entity.receiver),
  })))
}
