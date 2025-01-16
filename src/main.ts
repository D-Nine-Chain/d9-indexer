import { TypeormDatabase } from '@subsquid/typeorm-store'

import chalk from 'chalk'
import { processor } from './processor'
import { handleTransferEvents } from './handlers/d9-transfer'
import { handleWithdrawEvents } from './handlers/withdraw'

import { handleAmmContract } from './handlers/market-maker'
import { handleMerchantContractEvent } from './handlers/merchant'
import { handleCrossChainContractEvent } from './handlers/cross-chain'
import { handleD9USDTContract } from './handlers/d9-usdt'
import { handleBurnManagerContract } from './handlers/burn-manager'
import { handleD9NodeVoting } from './handlers/d9-node-voting'
import { ss58Encode } from './utils'
import { ContractAddress } from './constant'
import { handleNodeRewardContract } from './handlers/node-reward'
import { handleBlockData } from './handlers/block-data'

chalk.level = 1;

(BigInt.prototype as any).toJSON = function () { return this.toString() }

processor.run(new TypeormDatabase({ supportHotBlocks: true }), async (ctx) => {
  // 首先处理区块数据
  await handleBlockData(ctx)

  // 处理其他事件
  await handleTransferEvents(ctx)
  await handleWithdrawEvents(ctx)
  await handleAmmContract(ctx)
  await handleBurnManagerContract(ctx)
  await handleMerchantContractEvent(ctx)
  await handleCrossChainContractEvent(ctx)
  await handleD9USDTContract(ctx)
  await handleD9NodeVoting(ctx)
  await handleNodeRewardContract(ctx)
})

const caEntries = Object.entries(ContractAddress)
function getByValue(searchValue?: string) {
  if (!searchValue)
    return ''
  try {
    for (const [key, value] of caEntries) {
      if (value === searchValue)
        return `${chalk.gray('contract')}: [${chalk.blue(key)}]`
    }
    return `${chalk.gray('contract')}: [${chalk.yellow(ss58Encode(searchValue))}]`
  }
  catch {
    return ''
  }
}
