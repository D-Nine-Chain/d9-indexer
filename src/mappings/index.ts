import assert from 'assert'
import {
  SubstrateBlock,
  SubstrateEvent,
  SubstrateExtrinsic,
} from '@subql/types'
import { Balance } from '@polkadot/types/interfaces'
import { decodeAddress } from '@polkadot/util-crypto'
import { Account, Transfer } from '../types'

export async function handleBlock(_block: SubstrateBlock): Promise<void> {
  // Do something with each block handler here
}

export async function handleCall(_extrinsic: SubstrateExtrinsic): Promise<void> {
  // Do something with a call handler here
}

export * from './balance'
