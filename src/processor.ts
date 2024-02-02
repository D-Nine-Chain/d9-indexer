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

import { events } from './types'

export const processor = new SubstrateBatchProcessor()
  .setRpcEndpoint({
    url: assertNotNull(process.env.RPC_ENDPOINT),
    rateLimit: 0,
    maxBatchCallSize: 100,
  })
  // .setBlockRange({ from: 700000 })
  .addEvent({
    name: [
      events.balances.transfer.name,
      events.balances.burned.name,
      events.balances.withdraw.name,
    ],
    extrinsic: true,
    call: true,
  })
  .setFields({
    event: {
      args: true,
    },
    extrinsic: {
      hash: true,
      fee: true,
    },
    block: {
      timestamp: true,
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
