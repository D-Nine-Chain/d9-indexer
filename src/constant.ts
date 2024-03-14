import process from 'node:process'
import * as ss58 from '@subsquid/ss58'

export const PREFIX = 9
export const SS58 = ss58.codec(PREFIX)
export const ContractAddress = {
  MARKET_MAKER: SS58.decode(process.env.CONTRACT_MARKET_MAKER!),
  CROSS_CHAIN: SS58.decode(process.env.CONTRACT_CROSS_CHAIN!),
  D9_USDT: SS58.decode(process.env.CONTRACT_D9_USDT!),
  MERCHANT: SS58.decode(process.env.CONTRACT_MERCHANT!),
  BURN_MANAGER: SS58.decode(process.env.CONTRACT_BURN_MANAGER!),
  NODE_REWARD: SS58.decode(process.env.CONTRACT_NODE_REWARD!),
}
