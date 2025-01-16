import { Store } from '@subsquid/typeorm-store'
import { In } from 'typeorm'
import { ProcessorContext } from '../processor'
import { Account } from '../model'
import { ss58Encode } from '../utils'

export async function getAccounts(ctx: ProcessorContext<Store>, addresses: string[], encoded = false) {
  const accounts = await ctx.store.findBy(Account, { id: In(addresses) })
  for await (const address of addresses) {
    if (!accounts.find(account => account.id === address)) {
      if (encoded && address.startsWith('0x'))
        throw new Error('params encoded === true but address starts with 0x is abnormal')
      const newAccount = new Account({
        id: encoded ? address : ss58Encode(address),
      })
      await ctx.store.upsert(newAccount)
      accounts.push(newAccount)
    }
  }
  return accounts
}

export async function getAccount(ctx: ProcessorContext<Store>, address: string, encoded = false) {
  const accounts = await ctx.store.findBy(Account, { id: address })
  if (accounts.length === 0) {
    const newAccount = new Account({
      id: encoded ? address : ss58Encode(address),
    })
    await ctx.store.upsert(newAccount)
    return newAccount
  }
  return accounts[0]
}
