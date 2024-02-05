import process from 'node:process'
import * as ss58 from '@subsquid/ss58'
import { toHex } from '@subsquid/util-internal-hex'

export const PREFIX = 9
export const SS58 = ss58.codec(PREFIX)
export const ContractAddress = {
  AMM: SS58.decode(process.env.CONTRACT_AMM!),
  CONTRACT_CROSS_CHAIN: SS58.decode(process.env.CONTRACT_CROSS_CHAIN!),
}
