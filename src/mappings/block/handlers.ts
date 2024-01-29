import { GenericExtrinsic } from '@polkadot/types'
import { AnyTuple } from '@polkadot/types-codec/types'
import { SubstrateBlock } from '@subql/types'
import { Entity } from '@subql/types-core'

export type IBlockHandler<I extends AnyTuple, T extends Entity> = (
  data: {
    extrinsic: GenericExtrinsic<I>
    block: SubstrateBlock
    index: number
  }) => Promise<T[]>

export const blockHandlers = new Array<{ match: string, handler: IBlockHandler<AnyTuple, Entity> }>()
