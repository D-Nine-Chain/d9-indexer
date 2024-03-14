import { Store } from '@subsquid/typeorm-store'
import { ProcessorContext } from '../processor'
import { BaseEntity, isContractsCall, isContractsEvent, ss58Encode } from '../utils'
import { ContractAddress } from '../constant'
import * as MARKET_MAKER from '../abi/market-maker'
import { LiquidityAdded, LiquidityRemoved, MarketConversion, Token } from '../model'
import { usdtSaver } from '../helpers'
import { getAccounts } from './account'

type _Kind = (
  MARKET_MAKER.Event_LiquidityAdded | MARKET_MAKER.Event_LiquidityRemoved)['__kind']

type _LiquidityOps = {
  kind: (MARKET_MAKER.Event_LiquidityAdded | MARKET_MAKER.Event_LiquidityRemoved)['__kind']
  who: string
  d9: bigint
  usdt: bigint
} & BaseEntity

type _Conversion = {
  kind: (MARKET_MAKER.Event_USDTToD9Conversion | MARKET_MAKER.Event_D9ToUSDTConversion)['__kind']
  who: string
  usdt: bigint
  d9: bigint
} & BaseEntity

type _Entity = _LiquidityOps | _Conversion

export async function handleAmmContract(ctx: ProcessorContext<Store>) {
  const entities = [] as _Entity[]
  const { entities: usdtEntities, save } = usdtSaver(ctx)
  for await (const block of ctx.blocks) {
    for await (const event of block.events) {
      if (!event.extrinsic?.success)
        continue
      try {
        if (isContractsEvent(event, ContractAddress.MARKET_MAKER)) {
          const decoded = MARKET_MAKER.decodeEvent(event.args.data)
          console.info(decoded)
          const commonPart = {
            id: event.id,
            blockNumber: event.block.height,
            blockHash: event.block.hash,
            timestamp: new Date(event.block.timestamp!),
            extrinsicHash: event.extrinsic.hash,
            fee: event.extrinsic.fee ?? 0n,
          }
          switch (decoded.__kind) {
            case 'D9ToUSDTConversion':
            case 'USDTToD9Conversion':
              entities.push({
                kind: decoded.__kind,
                ...commonPart,
                who: ss58Encode(decoded.accountId),
                d9: decoded.d9,
                usdt: decoded.usdt,
              })
              usdtEntities.push({
                ...commonPart,
                from: decoded.__kind === 'USDTToD9Conversion'
                  ? ss58Encode(decoded.accountId)
                  : ss58Encode(ContractAddress.MARKET_MAKER),
                to: decoded.__kind === 'D9ToUSDTConversion'
                  ? ss58Encode(decoded.accountId)
                  : ss58Encode(ContractAddress.MARKET_MAKER),
                amount: decoded.usdt,
              })
              break
            case 'LiquidityAdded':
            case 'LiquidityRemoved':
              entities.push({
                kind: decoded.__kind,
                ...commonPart,
                who: ss58Encode(decoded.accountId),
                d9: decoded.d9,
                usdt: decoded.usdt,
              })
              usdtEntities.push({
                ...commonPart,
                from: decoded.__kind === 'LiquidityAdded'
                  ? ss58Encode(decoded.accountId)
                  : ss58Encode(ContractAddress.MARKET_MAKER),
                to: decoded.__kind === 'LiquidityRemoved'
                  ? ss58Encode(decoded.accountId)
                  : ss58Encode(ContractAddress.MARKET_MAKER),
                amount: decoded.usdt,
              })
              break
          }
        }
      }
      catch (e) {
        console.warn('[handleAmmContract]', e)
      }
    }
  }

  const accounts = await getAccounts(ctx, entities.map(({ who }) => who), true)

  await ctx.store.insert(entities.filter(({ kind }) => kind === 'LiquidityAdded').map(entity => new LiquidityAdded({
    ...entity,
    who: accounts.find(({ id }) => id === entity.who),
  })))

  await ctx.store.insert(entities.filter(({ kind }) => kind === 'LiquidityRemoved').map(entity => new LiquidityRemoved({
    ...entity,
    who: accounts.find(({ id }) => id === entity.who),
  })))

  await ctx.store.insert(entities.filter(({ kind }) => kind === 'D9ToUSDTConversion' || kind === 'USDTToD9Conversion').map(entity => new MarketConversion({
    ...entity,
    who: accounts.find(({ id }) => id === entity.who),
    fromToken: entity.kind === 'D9ToUSDTConversion' ? Token.D9 : Token.USDT,
    toToken: entity.kind === 'USDTToD9Conversion' ? Token.D9 : Token.USDT,
    lost: entity.kind === 'D9ToUSDTConversion' ? entity.d9 : entity.usdt,
    got: entity.kind === 'USDTToD9Conversion' ? entity.d9 : entity.usdt,
  })))

  await save()
}
