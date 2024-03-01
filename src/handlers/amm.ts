/* eslint-disable array-callback-return */
import { Entity, Store } from '@subsquid/typeorm-store'
import { ProcessorContext } from '../processor'
import { BaseEntity, isContractsCall, isContractsEvent, ss58Encode } from '../utils'
import { ContractAddress } from '../constant'
import * as AMM from '../abi/market-maker'
import { AddLiquidity, MarketGetToken, RemoveLiquidity, Token } from '../model'
import { getAccounts } from './account'

type _Kind = (AMM.Message_add_liquidity | AMM.Message_remove_liquidity | AMM.Message_get_d9 | AMM.Message_get_usdt)['__kind']

type _AddLiquidity = {
  kind: _Kind
  fee: bigint
  who: string
  d9: bigint
  usdt: bigint
} & BaseEntity
type _RemoveLiquidity = {
  kind: _Kind
  fee: bigint
  who: string
} & BaseEntity
type _GetToken = {
  kind: _Kind
  fee: bigint
  who: string
  fromAmount: bigint
  toAmount: bigint
  fromToken: Token
  toToken: Token
} & BaseEntity

type _Entity = _AddLiquidity | _RemoveLiquidity | _GetToken

export async function handleAmmContract(ctx: ProcessorContext<Store>) {
  const entities = [] as _Entity[]
  for await (const block of ctx.blocks) {
    for await (const _event of block.events) {
      if (!_event.extrinsic?.success)
        continue
      if (isContractsEvent(_event, ContractAddress.AMM)) {
        const event = AMM.decodeEvent(_event.args.data)
        // eslint-disable-next-line no-empty
        switch (event) {
          // TODO: from event
          // case ''
        }
      }
    }
    for await (const _call of block.calls) {
      if (!_call.extrinsic?.success)
        continue
      if (isContractsCall(_call, ContractAddress.AMM)) {
        const call = AMM.decodeMessage(_call.args.data)
        switch (call.__kind) {
          case 'add_liquidity':
            entities.push({
              kind: call.__kind,
              id: _call.id,
              blockNumber: _call.block.height,
              timestamp: new Date(_call.block.timestamp!),
              extrinsicHash: _call.extrinsic.hash,
              fee: _call.extrinsic.fee ?? 0n,
              who: ss58Encode(_call.origin?.value?.value),
              d9: BigInt(_call.args.value),
              usdt: call.usdtLiquidity,
            })
            break
          // case 'get_d9':
          //   entities.push({
          //     kind: call.__kind,
          //     id: _call.id,
          //     blockNumber: _call.block.height,
          //     timestamp: new Date(_call.block.timestamp!),
          //     extrinsicHash: _call.extrinsic.hash,
          //     fee: _call.extrinsic.fee ?? 0n,
          //     who: ss58Encode(_call.origin?.value?.value),
          //     fromAmount: call.usdt,
          //     fromToken: Token.USDT,
          //     toToken: Token.D9,
          //   })
          //   break
          // case 'get_usdt':
          //   entities.push({
          //     kind: call.__kind,
          //     id: _call.id,
          //     blockNumber: _call.block.height,
          //     timestamp: new Date(_call.block.timestamp!),
          //     extrinsicHash: _call.extrinsic.hash,
          //     fee: _call.extrinsic.fee ?? 0n,
          //     who: ss58Encode(_call.origin?.value?.value),
          //     fromAmount: BigInt(_call.args.value),
          //     fromToken: Token.D9,
          //     toToken: Token.USDT,
          //   })
          //   break
          case 'remove_liquidity':
            entities.push({
              kind: call.__kind,
              id: _call.id,
              blockNumber: _call.block.height,
              timestamp: new Date(_call.block.timestamp!),
              extrinsicHash: _call.extrinsic.hash,
              fee: _call.extrinsic.fee ?? 0n,
              who: ss58Encode(_call.origin?.value?.value),
            })
            break
        }
      }
    }
  }

  const accounts = await getAccounts(ctx, entities.map(({ who }) => who), true)

  await ctx.store.insert(entities.map((entity) => {
    switch (entity.kind) {
      case 'add_liquidity':
        return new AddLiquidity({
          ...entity,
          who: accounts.find(({ id }) => id === entity.who),
        })
      case 'remove_liquidity':
        return new RemoveLiquidity({
          ...entity,
          who: accounts.find(({ id }) => id === entity.who),
        })
      case 'get_usdt':
      case 'get_d9':
        return new MarketGetToken({
          ...entity,
          who: accounts.find(({ id }) => id === entity.who),
        })
    }
  }) satisfies Entity[])
}
