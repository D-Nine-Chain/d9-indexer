import { Entity } from '@subql/types-core'
import { SubstrateBlock } from '@subql/types'
import { blockHandlers } from './handlers'

import './balances'

export async function handleBlock(block: SubstrateBlock) {
  const extrinsics = block.block.extrinsics
  const len = extrinsics.length
  const entities: Entity[] = []
  if (len > 1) {
    extrinsics.shift()
    for await (const extrinsic of extrinsics) {
      const index = extrinsics.findIndex(_ => _.hash === extrinsic.hash) + 1
      logger.info(`
==================Block: ${block.block.header.number.toNumber()}====================:\n
SECTION: ${extrinsic.method.section}
METHOD: ${extrinsic.method.method}
ARGS: ${JSON.stringify(extrinsic.args, null, 2)}
DATA: ${JSON.stringify(extrinsic.data)}
${JSON.stringify(extrinsic.unwrap(), null, 2)}}
\n=================================================`,
      )
      for await (const { match, handler } of blockHandlers) {
        const matcher = [`${extrinsic.method.section}.${extrinsic.method.method}`, `${extrinsic.method.section}.*`]
        if (matcher.includes(match)) {
          try {
            entities.push(...(await handler({
              extrinsic,
              block,
              index,
            })))
          }
          catch (err) {
            logger.warn(err)
          }
        }
      }
    }
  }
  logger.info(`entities: ${JSON.stringify(entities, null, 2)}`)
  for await (const entity of entities) {
    try {
      await entity.save?.()
    }
    catch (err) {
      logger.warn(err)
    }
  }
}
