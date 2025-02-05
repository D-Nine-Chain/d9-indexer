import { WsProvider, ApiPromise } from "@polkadot/api";

let provider: WsProvider | null = null;
let api: ApiPromise | null = null;

export async function getApi() {
  if (api) return api;

  if (!provider) {
    provider = new WsProvider(process.env.RPC_ENDPOINT!.replace(/https?:\/\//, 'wss://'));
  }

  api = await ApiPromise.create({ provider });

  await api.isReady;

  return api;
}

