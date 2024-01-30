import {
  SubstrateDatasourceKind,
  SubstrateHandlerKind,
  SubstrateProject,
} from '@subql/types'
import { WasmDatasource } from '@subql/substrate-wasm-processor'

// Can expand the Datasource processor types via the genreic param
const project: SubstrateProject<WasmDatasource> = {
  specVersion: '1.0.0',
  version: '0.0.1',
  name: 'polkadot-starter',
  description:
    'This project can be used as a starting point for developing your SubQuery project',
  runner: {
    node: {
      name: '@subql/node',
      version: '>=3.0.1',
    },
    query: {
      name: '@subql/query',
      version: '*',
    },
  },
  schema: {
    file: './schema.graphql',
  },
  network: {
    chainId:
      '0xdcee8f92ac67f45b733e9d46c510d9d73d0d8310af7ba4ba0de2485e9128298b',
    endpoint: ['ws://3.15.163.97:40300'],
  },
  dataSources: [
    {
      kind: 'substrate/Wasm',
      startBlock: 750000,
      processor: {
        file: './node_modules/@subql/substrate-wasm-processor/dist/bundle.js',
        options: {
          abi: 'market-maker-abi',
          contract: 'wZksHemV7UiLQwYGMFuBCcGZ9NvwxQKcBHYoMsMXefuZucU',
        },
      },
      assets: new Map([
        ['market-maker-abi', { file: './abis/market-maker.json' }],
      ]),
      mapping: {
        file: './dist/index.js',
        handlers: [
          // debug
          {
            handler: 'handleWasm',
            kind: 'substrate/WasmCall',
          },

          {
            handler: 'handleGetD9Call',
            kind: 'substrate/WasmCall',
            filter: { selector: '0x0edab8e1', method: 'get_d9' },
          },

          // not working
          {
            handler: 'handleMarketMakerCurrencySwap',
            kind: 'substrate/WasmEvent',
            filter: {
              // identifier: 'CurrencySwap',
            },
          },
        ],
      },
    },
    {
      kind: 'substrate/Wasm',
      startBlock: 750000,
      processor: {
        file: './node_modules/@subql/substrate-wasm-processor/dist/bundle.js',
        options: {
          abi: 'usdt-abi',
          contract: 'yHSqdwvg7PuGVu2Xk9c9tYViLmRv9oRfEgokocE3KmnHVKj',
        },
      },
      assets: new Map([
        ['usdt-abi', { file: './abis/d9-usdt.json' }],
      ]),
      mapping: {
        file: './dist/index.js',
        handlers: [
          {
            handler: 'handleWasm',
            kind: 'substrate/WasmCall',
          },
        ],
      },
    },
    {
      kind: SubstrateDatasourceKind.Runtime,
      startBlock: 750000,
      mapping: {
        file: './dist/index.js',
        handlers: [
          {
            kind: SubstrateHandlerKind.Block,
            handler: 'handleBlock',
          },
        // {
        //   kind: SubstrateHandlerKind.Call,
        //   handler: 'handlerContractCall',
        //   filter: {
        //     module: 'contracts',
        //   },
        // },
        // {
        //   kind: SubstrateHandlerKind.Event,
        //   handler: 'handlerContractEvent',
        //   filter: {
        //     module: 'contracts',
        //     method: 'ContractEmitted',
        //   },
        // },
        // {
        //   kind: SubstrateHandlerKind.Event,
        //   handler: 'handlerBalanceDepositEvent',
        //   filter: {
        //     module: 'balances',
        //     method: 'Deposit',
        //   },
        // },
        ],
      },
    },
  ],
}

// Must set default to the project instance
export default project
