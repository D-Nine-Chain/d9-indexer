import { Store } from '@subsquid/typeorm-store'
import { In } from 'typeorm'
import { ProcessorContext } from '../processor'
import { Account } from '../model'
import { ss58Encode } from '../utils'

export async function getAccounts(ctx: ProcessorContext<Store>, addresses: string[], encoded = false) {
  const accounts = await ctx.store.findBy(Account, { id: In(addresses) })
  for await (const address of addresses) {
    if (!accounts.find(account => account.id === address)) {
      const newAccount = new Account({
        id: encoded ? address : ss58Encode(address),
      })
      await ctx.store.upsert(newAccount)
      accounts.push(newAccount)
    }
  }
  return accounts
}
