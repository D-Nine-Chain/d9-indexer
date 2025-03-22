import { Store } from '@subsquid/typeorm-store'
import { ProcessorContext } from '../processor'
import { isContractsCall, isContractsEvent, ss58Encode } from '../utils'
import { ContractAddress } from '../constant'
import * as D9USDT from '../abi/d9-usdt'
import { usdtSaver } from '../helpers'
import { Transfer } from '../model'

export async function handleD9USDTContract(ctx: ProcessorContext<Store>) {
  const { entities, save } = usdtSaver(ctx)

  for await (const block of ctx.blocks) {
    // ?? Why no events in the usdt contract will be emitted
    // for await (const event of block.events) {
    //   if (!event.extrinsic?.success)
    //     continue
    //   if (isContractsEvent(event, ContractAddress.D9_USDT)) {
    //     const decoded = D9USDT.decodeEvent(event.args.data)
    //     console.info(decoded)
    //     switch (decoded.__kind) {
    //       case 'Transfer':
    //         entities.push({
    //           id: event.id,
    //           blockNumber: block.header.height,
    //           blockHash: block.header.hash,
    //           extrinsicHash: event.extrinsic?.hash,
    //           timestamp: new Date(block.header.timestamp!),
    //           from: ss58Encode(decoded.from),
    //           to: ss58Encode(decoded.to),
    //           amount: decoded.value,
    //           fee: event.extrinsic?.fee || 0n,
    //         })
    //         break
    //     }
    //   }
    // }
    for await (const call of block.calls) {
      if (!call.extrinsic)
        continue
      if (isContractsCall(call, ContractAddress.D9_USDT)) {
        const decoded = D9USDT.decodeMessage(call.args.data)
        console.info(decoded)

        const commonPart = {
          id: call.block.height + '-' + call.extrinsic.id + '-' + call.extrinsicIndex,
          blockNumber: block.header.height,
          blockHash: block.header.hash,
          extrinsicHash: call.extrinsic?.hash,
          timestamp: new Date(block.header.timestamp!),
          fee: call.extrinsic?.fee || 0n,
          success: call.extrinsic.success,
        }
        switch (decoded.__kind) {
          case 'PSP22_transfer_from':
            entities.push({
              ...commonPart,
              from: ss58Encode(decoded.from),
              to: ss58Encode(decoded.to),
              amount: decoded.value,
            })
            break
          case 'PSP22_transfer':
            entities.push({
              ...commonPart,
              from: ss58Encode(call.origin.value.value),
              to: ss58Encode(decoded.to),
              amount: decoded.value,
            })
            break
        }
      }
    }
  }

  await save()
}
