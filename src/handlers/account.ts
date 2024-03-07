import { Store } from '@subsquid/typeorm-store'
import { In } from 'typeorm'
import { ProcessorContext } from '../processor'
import { Account } from '../model'
import { ss58Encode } from '../utils'

export async function getAccounts(ctx: ProcessorContext<Store>, addresses: string[], encoded = false) {
  const accounts = await ctx.store.findBy(Account, { id: In(addresses) })
  const newAccounts: Account[] = []

  for await (const address of addresses) {
    if (!accounts.find(account => account.id === address)) {
      const newAccount = new Account({
        id: encoded ? address : ss58Encode(address),
      })
      newAccounts.push(newAccount)
    }
  }

  try {
    await ctx.store.upsert(newAccounts)
  }
  catch (err) {
    console.warn('ERROR', err)
    return await getAccounts(ctx, addresses, encoded)
  }

  return accounts.concat(newAccounts)
}
