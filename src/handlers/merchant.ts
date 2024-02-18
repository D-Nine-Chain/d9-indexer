import { Store } from '@subsquid/typeorm-store'
import { ProcessorContext } from '../processor'
import { isContractsEvent } from '../utils'
import { ContractAddress } from '../constant'

// TODO: GreenPointsTransaction event, SubscriptionCreated event
export async function handleMerchantContractEvent(ctx: ProcessorContext<Store>) {
  for await (const block of ctx.blocks) {
    for await (const _event of block.events) {
      if (isContractsEvent(_event, ContractAddress.MERCHANT)) {
        console.info('emit merchant', '\n', JSON.stringify(_event, null, 2))
      // }
      // else {
      //   console.info('??', event.args.contract)
      //   console.info('emit amm', '\n', JSON.stringify(event, null, 2))
      }
    }
  }
}
