import { ApiPromise, WsProvider } from '@polkadot/api'
import { ContractPromise } from '@polkadot/api-contract'
import type { WeightV2 } from '@polkadot/types/interfaces'
import { ABICrossChainTransfer } from './ABIs/cross-chain-transfer'
import { ABID9BurnManager } from './ABIs/d9-burn-manager'
import { ABID9BurnMining } from './ABIs/d9-burn-mining'
import { ABID9MerchantMining } from './ABIs/d9-merchant-mining'
import { ABID9USDT } from './ABIs/d9-usdt'
import { ABIMarketMaker } from './ABIs/market-maker'
import { ABIMiningPool } from './ABIs/mining-pool'
import { ABINodeReward } from './ABIs/node-reward'
import { BN, BN_ONE } from '@polkadot/util/bn'
import '@polkadot/api/augment'
import '@polkadot/types/augment'
import '@polkadot/types/lookup'

export const kEndpoint = process.env.RPC_ENDPOINT

export const MAX_CALL_WEIGHT = new BN(5_000_000_000_000).isub(BN_ONE)
export const PROOFSIZE = new BN(119903836479112)

export const STORAGE_DEPOSIT_LIMIT = null
import { Keyring } from '@polkadot/api'

export function getKeyring() {
  return new Keyring({
    ss58Format: 9,
    type: 'sr25519',
  })
}

export function getGasLimits(d9Api: ApiPromise) {
  return {
    writeLimit: d9Api.registry.createType('WeightV2', {
      refTime: new BN(50_000_000_000),
      proofSize: new BN(800_000),
    }) as WeightV2,
    readLimit: d9Api.registry.createType('WeightV2', {
      refTime: MAX_CALL_WEIGHT,
      proofSize: PROOFSIZE,
    }) as WeightV2,
  }
}

export const D9Config = {
  contracts: {
    crossChainTransfer: {
      address: 'vNNoHwVH8af77P4s1ch14yTy7UTd8w9g2VfYA5fBExZzA7i',
      abi: ABICrossChainTransfer,
    },
    // main pool
    d9BurnManager: {
      address: 'wRGYShktZsxtKwXCCzqtLW7P1a5K2qDsaXEcRWxVYKGwH7d',
      abi: ABID9BurnManager,
    },
    d9BurnMining: {
      address: 'v7DBDNUUz2hbWSFZz5MAc5irz9fsNV9VBSFNoUdEEte1aTj',
      abi: ABID9BurnMining,
    },
    d9MerchantMining: {
      address: 'xjyLYnZBRhYYjUKjCp8UiHnmcjHmkPfRSBxTiLLMoEwtzwp',
      abi: ABID9MerchantMining,
    },
    d9USDT: {
      address: 'uLj9DRUujbpCyK7USZY5ebGbxdtKoWvdRvGyyUsoLWDsNng',
      abi: ABID9USDT,
    },
    marketMaker: {
      address: 'z8keEeLwjZFK5NS5PF6xYwTHEbm7jwpH4gBYB1JV6pDTtWg',
      abi: ABIMarketMaker,
    },
    nodeReward: {
      address: 'xqDsmMNZsCprGkjG6JPCQYysvdBs5GvudLzkXt73BbysX6D',
      abi: ABINodeReward,
    },
    // new pool
    miningPool: {
      address: 'zXB3VPHrnb9pzfJweLstBfmn5Xq3dEAFAbKKxTsQZg1entq',
      abi: ABIMiningPool,
    },
    pool2: {
      address: 'wMzLQV1tpuzMQ1fHCcbexp2zwu6tNDZfWqLbYscNSbzURZW',
      abi: ABIMiningPool,
    },
  },
} as const

export function getContractNameByAddress(address?: string) {
  if (!address)
    return 'Unknown'

  const addressParsed = address.startsWith('0x')
    ? getKeyring().encodeAddress(address)
    : address

  const contractKey = Object.entries(D9Config.contracts).find(([_, contract]) =>
    contract.address.includes(addressParsed),
  )?.[0] as keyof typeof D9Config.contracts

  switch (contractKey) {
    case 'crossChainTransfer':
      return 'Cross Chain Transfer'
    case 'd9BurnManager':
      return 'D9 Burn Manager'
    case 'd9BurnMining':
      return 'D9 Burn Mining'
    case 'd9MerchantMining':
      return 'D9 Merchant Mining'
    case 'd9USDT':
      return 'D9 USDT'
    case 'marketMaker':
      return 'Market Maker'
    case 'nodeReward':
      return 'Node Reward'
    case 'miningPool':
      return 'Mining Pool'
    // case "pool2":
    //   return "Pool 2";
    default:
      return 'Unknown'
  }
}

export const customRPC = {
  referral: {
    getAncestors: {
      description: 'get ancestors of a referral account',
      params: [
        {
          name: 'account',
          type: 'AccountId',
        },
        {
          name: 'at',
          type: 'Hash',
          isOptional: true,
        },
      ],
      type: 'Vec<AccountId>',
    },
    getParent: {
      description: 'get parent of a referral account',
      params: [
        {
          name: 'account',
          type: 'AccountId',
        },
        {
          name: 'at',
          type: 'Hash',
          isOptional: true,
        },
      ],
      type: 'AccountId',
    },
    getDirectReferralCount: {
      description: 'get direct referrals count of a referral account',
      params: [
        {
          name: 'account',
          type: 'AccountId',
        },
        {
          name: 'at',
          type: 'Hash',
          isOptional: true,
        },
      ],
      type: 'u32',
    },
  },
  voting: {
    getSortedCandidates: {
      description: 'get canidates sorted by votes',
      params: [
        {
          name: 'at',
          type: 'Hash',
          isOptional: true,
        },
      ],
      type: 'Vec<(AccountId, u64)>',
    },
  },
}

export const d9Api = new ApiPromise({
  provider: new WsProvider(kEndpoint),
  rpc: customRPC,
  noInitWarn: true,
  isPedantic: true,
})

await d9Api.isReady

export const Contracts = {
  D9MerchantMining: new ContractPromise(
    d9Api,
    D9Config.contracts.d9MerchantMining.abi,
    D9Config.contracts.d9MerchantMining.address,
  ),
  MarketMaker: new ContractPromise(
    d9Api,
    D9Config.contracts.marketMaker.abi,
    D9Config.contracts.marketMaker.address,
  ),
  MiningPool: new ContractPromise(
    d9Api,
    D9Config.contracts.miningPool.abi,
    D9Config.contracts.miningPool.address,
  ),
  D9BurnMining: new ContractPromise(
    d9Api,
    D9Config.contracts.d9BurnMining.abi,
    D9Config.contracts.d9BurnMining.address,
  ),
  D9USDT: new ContractPromise(
    d9Api,
    D9Config.contracts.d9USDT.abi,
    D9Config.contracts.d9USDT.address,
  ),
  D9BurnManager: new ContractPromise(
    d9Api,
    D9Config.contracts.d9BurnManager.abi,
    D9Config.contracts.d9BurnManager.address,
  ),
  gasLimits: getGasLimits(d9Api),
}
