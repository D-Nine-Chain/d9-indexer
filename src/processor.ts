/* eslint-disable node/prefer-global/process */
import { assertNotNull } from '@subsquid/util-internal'
import {
  BlockHeader,
  DataHandlerContext,
  SubstrateBatchProcessor,
  SubstrateBatchProcessorFields,
  Call as _Call,
  Event as _Event,
  Extrinsic as _Extrinsic,
} from '@subsquid/substrate-processor'

import { calls, events } from './types'
import { ContractAddress } from './constant'

export const processor = new SubstrateBatchProcessor()
  .setRpcEndpoint({
    url: assertNotNull(process.env.RPC_ENDPOINT),
    rateLimit: 0,
    maxBatchCallSize: 500,
  })
  .setBlockRange({ from: 1 })
  // .setBlockRange({ from: 407328 })
  .addEvent({
    name: [
      events.balances.balanceSet.name,
      events.balances.burned.name,
      events.balances.deposit.name,
      events.balances.dustLost.name,
      events.balances.endowed.name,
      events.balances.frozen.name,
      events.balances.issued.name,
      events.balances.locked.name,
      events.balances.minted.name,
      events.balances.rescinded.name,
      events.balances.reserveRepatriated.name,
      events.balances.reserved.name,
      events.balances.restored.name,
      events.balances.slashed.name,
      events.balances.suspended.name,
      events.balances.thawed.name,
      events.balances.transfer.name,
      events.balances.unlocked.name,
      events.balances.unreserved.name,
      events.balances.upgraded.name,
      events.balances.withdraw.name,
      events.d9NodeVoting.candidacyRemoved.name,
      events.d9NodeVoting.candidacySubmitted.name,
      events.d9NodeVoting.votesDelegatedBy.name,
    ],
    extrinsic: true,
    call: true,
    stack: true,
  })
  .addCall({
    name: [
      calls.d9NodeVoting.addVotingInterest.name,
    ],
    extrinsic: true,
    events: true,
    stack: true,
  })
  .addContractsContractEmitted({
    contractAddress: [
      ContractAddress.MARKET_MAKER,
      ContractAddress.CROSS_CHAIN,
      ContractAddress.D9_USDT,
      ContractAddress.MERCHANT,
      ContractAddress.BURN_MANAGER,
      ContractAddress.NODE_REWARD,
    ],
    extrinsic: true,
    call: true,
    stack: true,
  })
  .setFields({
    event: {
      phase: true,
      args: true,
    },
    extrinsic: {
      hash: true,
      fee: true,
      success: true,
      error: true,
    },
    block: {
      timestamp: true,
      stateRoot: true,
      extrinsicsRoot: true,
      specName: true,
      implName: true,
      implVersion: true,
    },
    call: {
      name: true,
      args: true,
      origin: true,
    },
  })
// Uncomment to disable RPC ingestion and drastically reduce no of RPC calls
// .useArchiveOnly()

export type Fields = SubstrateBatchProcessorFields<typeof processor>
export type Block = BlockHeader<Fields>
export type Event = _Event<Fields>
export type Call = _Call<Fields>
export type Extrinsic = _Extrinsic<Fields>
export type ProcessorContext<Store> = DataHandlerContext<Store, Fields>
