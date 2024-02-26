import { TypeormDatabase } from '@subsquid/typeorm-store'

import { processor } from './processor'
import { handleTransferEvents } from './handlers/d9-transfer'
import { handleWithdrawEvents } from './handlers/withdraw'

import { handleAmmContract } from './handlers/amm'
import { handleMerchantContractEvent } from './handlers/merchant'
import { handleCrossChainContractEvent } from './handlers/cross-chain'
import { handleD9USDTContract } from './handlers/d9-usdt'
import { handleBurnManagerContract } from './handlers/burn-manager'
import { handleD9NodeVoting } from './handlers/d9-node-voting'

(BigInt.prototype as any).toJSON = function () { return this.toString() }

processor.run(new TypeormDatabase({ supportHotBlocks: true }), async (ctx) => {
  // for await (const block of ctx.blocks) {
  //   for await (const call of block.calls) {
  //     console.info('------------------------------------')
  //     console.info('call.name', call.name, 'call 👇 ')
  //     console.info(JSON.stringify(call, null, 2))
  //     console.info('------------------------------------')
  //   }
  //   for await (const event of block.events) {
  //     console.info('------------------------------------')
  //     console.info('event.name', event.name, 'event 👇 ')
  //     console.info(JSON.stringify(event, null, 2))
  //     console.info('------------------------------------')
  //   }
  // }
  await handleTransferEvents(ctx)
  await handleWithdrawEvents(ctx)
  await handleAmmContract(ctx)
  await handleBurnManagerContract(ctx)
  await handleMerchantContractEvent(ctx)
  await handleCrossChainContractEvent(ctx)
  await handleD9USDTContract(ctx)
  await handleD9NodeVoting(ctx)
})
