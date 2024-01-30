import { WasmCall } from '@subql/substrate-wasm-processor'

export async function handleWasm(a: WasmCall) {
  logger.info(`
-------------------------------------
handleWasm:
Number: ${a.blockNumber} BlockHash: ${a.blockHash} Hash: ${a.hash}
Success: ${a.success}
Data: ${a.data}
${JSON.stringify(a, null, 2)}
-------------------------------------
`)
}
