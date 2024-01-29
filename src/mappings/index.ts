import { SubstrateEvent } from '@subql/types'

export * from './block'

export async function handleContractCallEvent(event: SubstrateEvent) {
  logger.info(`event: ${JSON.stringify(event.toHuman())}`)
  logger.info(` event: ${JSON.stringify(event.toJSON())}`)
}

// eslint-disable-next-line no-extend-native
Object.defineProperty(BigInt.prototype, 'toJSON', {
  get() {
    return () => String(this)
  },
})
