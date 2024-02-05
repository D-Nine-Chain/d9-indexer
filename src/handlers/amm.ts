import { Store } from '@subsquid/typeorm-store'
import { ProcessorContext } from '../processor'
import { isContractsEvent } from '../utils'
import { ContractAddress } from '../constant'

export async function handleAmmContractEvent(ctx: ProcessorContext<Store>) {
  for await (const block of ctx.blocks) {
    for await (const event of block.events) {
      if (isContractsEvent(event, ContractAddress.AMM)) {
        console.info('emit amm', '\n', JSON.stringify(event, null, 2))
      }
      else {
        console.info('??', event.args.contract)
        console.info('emit amm', '\n', JSON.stringify(event, null, 2))
      }
    }
  }
}
