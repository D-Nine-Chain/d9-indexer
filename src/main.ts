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
import { ss58Encode } from './utils'
import { ContractAddress } from './constant'

(BigInt.prototype as any).toJSON = function () { return this.toString() }

processor.run(new TypeormDatabase({ supportHotBlocks: true }), async (ctx) => {
  for await (const block of ctx.blocks) {
    for await (const call of block.calls) {
      console.info('call.name', call.name, getByValue(call.args?.dest?.value))
      if (call.name.match(/ErrorIssuingRewards|CandidacySubmitted|VotesDelegatedBy|CandidacyRemoved/g)) {
        console.info('---------------', 'call 👇 ', '-----------------')
        console.info(JSON.stringify(call, null, 2))
        console.info('------------------------------------')
      }
    }
    for await (const event of block.events) {
      console.info('event.name', event.name, getByValue(event.args?.contract))
      if (event.name.match(/ErrorIssuingRewards|CandidacySubmitted|VotesDelegatedBy|CandidacyRemoved/g)) {
        console.info('---------------', 'event 👇 ', '-----------------')
        console.info(JSON.stringify(event, null, 2))
        console.info('------------------------------------')
      }
    }
  }
  await handleTransferEvents(ctx)
  await handleWithdrawEvents(ctx)
  await handleAmmContract(ctx)
  await handleBurnManagerContract(ctx)
  await handleMerchantContractEvent(ctx)
  await handleCrossChainContractEvent(ctx)
  await handleD9USDTContract(ctx)
  await handleD9NodeVoting(ctx)
})

const caEntries = Object.entries(ContractAddress)
function getByValue(searchValue?: string) {
  if (!searchValue)
    return ''
  try {
    for (const [key, value] of caEntries) {
      if (value === searchValue)
        return `contract: ${key}`
    }
    return `unknown contract address: ${ss58Encode(searchValue)}`
  }
  catch {
    return ''
  }
}
