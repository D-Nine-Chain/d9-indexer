import { TypeormDatabase } from '@subsquid/typeorm-store'

import { processor } from './processor'
import { handleTransferEvents } from './handlers/transfer'

processor.run(new TypeormDatabase({ supportHotBlocks: true }), async (ctx) => {
  await handleTransferEvents(ctx)
})
