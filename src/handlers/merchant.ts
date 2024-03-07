import { Store } from '@subsquid/typeorm-store'
import { ProcessorContext } from '../processor'
import { BaseEntity, isContractsEvent, ss58Encode } from '../utils'
import { ContractAddress } from '../constant'
import * as Merchant from '../abi/d9-merchant-mining'
import { GreenPointsTransaction, MerchantSubscription } from '../model'
import { getAccounts } from './account'

interface Subscription extends BaseEntity {
  expiry: Date
  who: string
}

interface GreenPointsTrx extends BaseEntity {
  fee: bigint
  consumer: string
  consumerGP: bigint
  merchant: string
  merchantGP: bigint
}

export async function handleMerchantContractEvent(ctx: ProcessorContext<Store>) {
  const entities: (Subscription | GreenPointsTrx)[] = []
  for await (const block of ctx.blocks) {
    for await (const event of block.events) {
      if (!event.extrinsic?.success)
        continue
      if (isContractsEvent(event, ContractAddress.MERCHANT)) {
        const decoded = Merchant.decodeEvent(event.args.data)
        console.info(decoded)
        switch (decoded.__kind) {
          case 'SubscriptionCreated':
            entities.push({
              id: event.id,
              blockNumber: block.header.height,
              timestamp: new Date(block.header.timestamp!),
              extrinsicHash: event.extrinsic?.hash,
              fee: event.extrinsic.fee ?? 0n,
              expiry: new Date(Number(decoded.expiry)),
              who: ss58Encode(decoded.accountId),
            })
            break
          case 'GreenPointsTransaction':
            entities.push({
              id: event.id,
              blockNumber: block.header.height,
              timestamp: new Date(block.header.timestamp!),
              extrinsicHash: event.extrinsic?.hash,
              fee: event.extrinsic.fee ?? 0n,
              consumer: ss58Encode(decoded.consumer.accountId),
              consumerGP: decoded.consumer.greenPoints,
              merchant: ss58Encode(decoded.merchant.accountId),
              merchantGP: decoded.merchant.greenPoints,
            })
            break
        }
      }
    }
  }

  const accounts = await getAccounts(ctx, entities.flatMap(entity => 'who' in entity ? [entity.who] : [entity.consumer, entity.merchant]), true)

  await ctx.store.insert(entities.filter(entity => 'who' in entity).map(entity => new MerchantSubscription({
    ...entity,
    who: accounts.find(account => account.id === (entity as Subscription).who),
  })))

  await ctx.store.insert(entities.filter(entity => !('who' in entity)).map(entity => new GreenPointsTransaction({
    ...entity,
    merchant: accounts.find(account => account.id === (entity as GreenPointsTrx).merchant),
    consumer: accounts.find(account => account.id === (entity as GreenPointsTrx).consumer),
  })))
}
