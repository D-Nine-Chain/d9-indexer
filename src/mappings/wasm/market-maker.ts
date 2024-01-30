import { U64 } from '@polkadot/types-codec'
import { AnyU8a } from '@polkadot/types-codec/types'
import { AccountId, Balance } from '@polkadot/types/interfaces'
import { WasmCall, WasmEvent } from '@subql/substrate-wasm-processor'
import { CurrencySwap } from 'src/types'
import { checkAndGetAccount } from '../account'

type CurrencySwapArgs = [AccountId, [AnyU8a, AnyU8a], U64]

export async function handleMarketMakerCurrencySwap(event: WasmEvent<CurrencySwapArgs>) {
  logger.info(`
  handleMarketMakerCurrencySwap

  ${event.args}
  ${event.args?.map(a => JSON.stringify(a))}
  `)
}

export async function handleGetD9Call(call: WasmCall<[Balance]>) {
  const { data, from, success, blockNumber, blockHash, hash, idx, timestamp } = call
  logger.info(`handleGetD9Call: block: ${blockNumber}-${idx} address: ${from.toString()} amount: ${data}`)
  const account = await checkAndGetAccount(from.toString(), blockNumber)
  await account.save()
  const record = CurrencySwap.create({
    id: `${blockNumber}-${idx}`,
    amount: typeof call.data === 'string' ? BigInt(0) : call.data.args[0].toBigInt(),
    blockNumber,
    blockHash,
    hash,
    date: timestamp,
    accountId: account.id,
    success,
    from: 'USDT',
    to: 'D9',
  })
  await record.save()
}

export async function handleGetUSDTCall(call: WasmCall) {
  const { value, from, success, blockNumber, blockHash, hash, idx, timestamp } = call
  logger.info(`handleGetD9Call: block: ${blockNumber}-${idx} address: ${from.toString()} amount: ${value}`)
  const account = await checkAndGetAccount(from.toString(), blockNumber)
  await account.save()
  const record = CurrencySwap.create({
    id: `${blockNumber}-${idx}`,
    amount: value.toBigInt(),
    blockNumber,
    blockHash,
    hash,
    date: timestamp,
    accountId: account.id,
    success,
    from: 'USDT',
    to: 'D9',
  })
  await record.save()
}
