import { Store } from '@subsquid/typeorm-store'
import { ProcessorContext } from '../processor'
import { BaseEntity, isContractsEvent, ss58Encode } from '../utils'
import { ContractAddress } from '../constant'
import * as Merchant from '../abi/d9-merchant-mining'
import { GreenPointsTransaction, MerchantPaymentSent, MerchantRedeemed, MerchantSubscriptionExtended, Token } from '../model'
import { usdtSaver } from '../helpers'
import { getAccounts } from './account'

interface Subscription extends BaseEntity {
  kind: Merchant.Event_SubscriptionExtended['__kind']
  expiry: Date
  who: string
  paymentToken: Token
  amount: bigint
}

interface GreenPointsTrx extends BaseEntity {
  kind: Merchant.Event_GreenPointsTransaction['__kind']
  consumer: string
  consumerGP: bigint
  merchant: string
  merchantGP: bigint
}

interface Redeemed extends BaseEntity {
  kind: Merchant.Event_D9Redeemed['__kind']
  who: string
  amount: bigint
  token: Token
}

interface Payment extends BaseEntity {
  kind: (Merchant.Event_D9MerchantPaymentSent | Merchant.Event_USDTMerchantPaymentSent)['__kind']
  merchant: string
  consumer: string
  amount: bigint
  paymentToken: Token
}

export async function handleMerchantContractEvent(ctx: ProcessorContext<Store>) {
  const entities: (Subscription | GreenPointsTrx | Redeemed | Payment)[] = []

  const { entities: usdtEntities, save } = usdtSaver(ctx)

  for await (const block of ctx.blocks) {
    for await (const event of block.events) {
      if (!event.extrinsic?.success)
        continue
      if (isContractsEvent(event, ContractAddress.MERCHANT)) {
        try {
          const decoded = Merchant.decodeEvent(event.args.data)
          console.info(decoded)
          const commonPart = {
            id: event.id,
            blockNumber: block.header.height,
            blockHash: block.header.hash,
            timestamp: new Date(block.header.timestamp!),
            extrinsicHash: event.extrinsic?.hash,
            fee: event.extrinsic.fee ?? 0n,
          }
          switch (decoded.__kind) {
            case 'SubscriptionExtended':
              entities.push({
                kind: decoded.__kind,
                ...commonPart,
                expiry: new Date(Number(decoded.expiry)),
                who: ss58Encode(decoded.accountId),
                paymentToken: Token.USDT,
                amount: decoded.usdt,
              })
              // usdtEntities.push({
              //   ...commonPart,
              //   from: ss58Encode(decoded.accountId),
              //   to: ss58Encode(ContractAddress.MERCHANT),
              //   amount: decoded.usdt,
              // })
              break
            case 'D9MerchantPaymentSent':
            case 'USDTMerchantPaymentSent':
              entities.push({
                kind: decoded.__kind,
                ...commonPart,
                merchant: ss58Encode(decoded.merchant),
                consumer: ss58Encode(decoded.consumer),
                amount: decoded.amount,
                paymentToken: decoded.__kind === 'D9MerchantPaymentSent' ? Token.D9 : Token.USDT,
              })
              break
            case 'D9Redeemed':
              entities.push({
                kind: decoded.__kind,
                ...commonPart,
                who: ss58Encode(decoded.accountId),
                amount: decoded.redeemedD9,
                token: Token.D9,
              })
              break
            case 'GreenPointsTransaction':
              entities.push({
                kind: decoded.__kind,
                ...commonPart,
                consumer: ss58Encode(decoded.consumer.accountId),
                consumerGP: decoded.consumer.greenPoints,
                merchant: ss58Encode(decoded.merchant.accountId),
                merchantGP: decoded.merchant.greenPoints,
              })
              break
            case 'GivePointsUSDT':
              // 如果它发出了PSP22::transfer_from，那么在 d9-usdt.ts 里应该会记录才是
              // usdtEntities.push({
              //   ...commonPart,
              //   from: ss58Encode(decoded.merchant),
              //   to: ss58Encode(ContractAddress.MERCHANT),
              //   amount: decoded.amount,
              // })
              break
          }
        }
        catch (err) { console.warn('[handleMerchantContractEvent]', err) }
      }
    }
  }

  const accounts = await getAccounts(ctx, entities.flatMap(entity => 'who' in entity ? [entity.who] : [entity.consumer, entity.merchant]), true)

  await ctx.store.insert(entities.filter(({ kind }) => kind === 'SubscriptionExtended').map(entity => new MerchantSubscriptionExtended({
    ...entity,
    who: accounts.find(account => account.id === (entity as Subscription).who),
  })))

  await ctx.store.insert(entities.filter(({ kind }) => kind === 'GreenPointsTransaction').map(entity => new GreenPointsTransaction({
    ...entity,
    merchant: accounts.find(account => account.id === (entity as GreenPointsTrx).merchant),
    consumer: accounts.find(account => account.id === (entity as GreenPointsTrx).consumer),
  })))

  await ctx.store.insert(entities.filter(({ kind }) => kind === 'D9MerchantPaymentSent' || kind === 'USDTMerchantPaymentSent').map(entity => new MerchantPaymentSent({
    ...entity,
    merchant: accounts.find(account => account.id === (entity as Payment).merchant),
    consumer: accounts.find(account => account.id === (entity as Payment).consumer),
  })))

  await ctx.store.insert(entities.filter(({ kind }) => kind === 'D9Redeemed').map(entity => new MerchantRedeemed({
    ...entity,
    who: accounts.find(account => account.id === (entity as Redeemed).who),
  })))

  await save()
}
