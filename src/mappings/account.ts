import { decodeAddress } from '@polkadot/util-crypto'
import { Account } from '../../src/types'

export async function checkAndGetAccount(
  address: string,
  blockNumber: number,
): Promise<Account> {
  let account = await Account.get(address.toLowerCase())
  if (!account) {
    account = Account.create({
      id: address.toLowerCase(),
      publicKey: decodeAddress(address).toString().toLowerCase(),
      firstTransferBlock: blockNumber,
    })
  }
  return account
}
