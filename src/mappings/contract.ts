import { SubstrateBlock, SubstrateEvent, SubstrateExtrinsic } from '@subql/types'

export async function handlerContractBlock(block: SubstrateBlock) {
  if (block.block.extrinsics.length > 1) {
    logger.info(`handlerContractBlock : \n${JSON.stringify(block, null, 2)}`)
    // The polkadot api is available in handlers:
    // api.rpc.xxx
  }
}

export async function handlerContractEvent(_event: SubstrateEvent) {
  const {
    event: {
      data: [_contract, _data],
    },
  } = _event

  // contract is Contract address
  // data is contract data
  logger.info(`handlerContractEvent : \n${JSON.stringify(_event, null, 2)}`)
}

export async function handlerContractCall(extrinsic: SubstrateExtrinsic) {
  logger.info(`handlerContractCall : \n${JSON.stringify(extrinsic, null, 2)}`)
}
