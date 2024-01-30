import { SubstrateBlock } from '@subql/types'
import { blockHandlers } from './handlers'

import './balances'

// import './contracts'

export async function handleBlock(block: SubstrateBlock) {
  const extrinsics = block.block.extrinsics
  const len = extrinsics.length
  if (len > 1) {
    logger.info(`handleBlock ${block.block.header.number.toNumber()}`)
    logger.info(`extrinsics.length ${len}`)
    // logger.info(`extrinsics ${extrinsics}`)
    extrinsics.shift()
    for await (const extrinsic of extrinsics) {
      const index = extrinsics.findIndex(_ => _.hash === extrinsic.hash) + 1
      let handled = false
      const matcher = [`${extrinsic.method.section}.${extrinsic.method.method}`, `${extrinsic.method.section}.*`]
      if (extrinsic.method.section === 'contracts')
        continue
      for await (const { match, handler } of blockHandlers) {
        if (matcher.includes(match)) {
          try {
            await handler({
              extrinsic,
              block,
              index,
            })
            handled = true
          }
          catch (err) {
            logger.warn(err)
          }
        }
      }
      if (!handled) {
        logger.info(`
==================Unhandle Block: ${block.block.header.number.toNumber()}====================:\n
SECTION: ${extrinsic.method.section}
METHOD: ${extrinsic.method.method}
ARGS: ${JSON.stringify(extrinsic.args, null, 2)}
${JSON.stringify(extrinsic.unwrap(), null, 2)}}
${JSON.stringify([`${extrinsic.method.section}.${extrinsic.method.method}`, `${extrinsic.method.section}.*`])}
${JSON.stringify(blockHandlers)}
\n=================================================`,
        )
      }
    }
  }
}
