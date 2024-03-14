import { Store } from '@subsquid/typeorm-store'
import { ProcessorContext } from '../processor'
import { BaseEntity, ss58Encode } from '../utils'
import { calls } from '../types'
import { NodeVote } from '../model'
import { getAccounts } from './account'

type _Record = {
  amount: bigint
  beneficiaryVoter: string
  burnContract: string
  mainPool: string
  fee: bigint
} & BaseEntity

export async function handleD9NodeVoting(ctx: ProcessorContext<Store>) {
  const entities = [] as _Record[]
  for await (const block of ctx.blocks) {
    for await (const call of block.calls) {
      if (!call.extrinsic?.success)
        continue
      if (call.name === calls.d9NodeVoting.addVotingInterest.name) {
        const { amountToBurn, beneficiaryVoter, burnContract, mainPool } = calls.d9NodeVoting.addVotingInterest.v113.decode(call)
        entities.push({
          id: call.id,
          blockNumber: call.block.height,
          blockHash: call.block.hash,
          extrinsicHash: call.extrinsic?.hash,
          timestamp: new Date(call.block.timestamp!),
          amount: amountToBurn,
          beneficiaryVoter: ss58Encode(beneficiaryVoter),
          burnContract,
          mainPool,
          fee: call.extrinsic?.fee ?? 0n,
        })
      }
    }
  }

  const accounts = await getAccounts(ctx, entities.map(entity => entity.beneficiaryVoter), true)

  await ctx.store.insert(entities.map((entity) => {
    return new NodeVote({
      ...entity,
      beneficiaryVoter: accounts.find(account => account.id === entity.beneficiaryVoter),
      burnContract: ss58Encode(entity.burnContract),
      mainPool: ss58Encode(entity.mainPool),
    })
  }))
}
