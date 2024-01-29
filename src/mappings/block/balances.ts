import { Balance } from '@polkadot/types/interfaces'
import { Transfer } from '../../../src/types'
import { checkAndGetAccount } from '../account'
import { blockHandlers } from './handlers'

blockHandlers.push({
  match: 'balances.transfer',
  handler: async ({ extrinsic, block: { block, timestamp }, index }) => {
    const [to, amount] = extrinsic.args

    const from = extrinsic.signer
    const blockNumber = block.header.number.toNumber()
    const fromAccount = await checkAndGetAccount(from.toString(), blockNumber)
    const toAccount = await checkAndGetAccount(to.toString(), blockNumber)

    const transfer = Transfer.create({
      id: `${blockNumber}-${index}`,
      blockNumber,
      date: timestamp,
      fromId: fromAccount.id,
      toId: toAccount.id,
      amount: (amount as Balance).toBigInt(),
    })

    fromAccount.lastTransferBlock = blockNumber
    toAccount.lastTransferBlock = blockNumber

    await Promise.all([fromAccount.save(), toAccount.save(), transfer.save()])
    return transfer
  },
})
