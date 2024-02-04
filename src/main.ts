import { TypeormDatabase } from '@subsquid/typeorm-store'

import { processor } from './processor'
import { handleTransferEvents } from './handlers/transfer'
import { handleWithdrawEvents } from './handlers/withdraw'

processor.run(new TypeormDatabase({ supportHotBlocks: true }), async (ctx) => {
  await handleTransferEvents(ctx)
  await handleWithdrawEvents(ctx)
})
