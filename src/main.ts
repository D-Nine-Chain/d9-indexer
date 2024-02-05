import { TypeormDatabase } from '@subsquid/typeorm-store'

import { processor } from './processor'
import { handleTransferEvents } from './handlers/transfer'
import { handleWithdrawEvents } from './handlers/withdraw'
import { handleBurnEvents } from './handlers/burn'
import { handleAmmContractEvent } from './handlers/amm'
import { handleCrossChainContractEvent } from './handlers/cross-chain'

processor.run(new TypeormDatabase({ supportHotBlocks: true }), async (ctx) => {
  // for await (const block of ctx.blocks) {
  //   for await (const event of block.events) {
  //     console.info('------------------------------------')
  //     console.info('event.name', event.name, 'event 👇 ')
  //     console.info(JSON.stringify(event, null, 2))
  //     console.info('------------------------------------')
  //   }
  // }
  await handleTransferEvents(ctx)
  await handleWithdrawEvents(ctx)
  await handleBurnEvents(ctx)
  await handleAmmContractEvent(ctx)
  await handleCrossChainContractEvent(ctx)
})
