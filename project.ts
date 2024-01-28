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
    /* The genesis hash of the network (hash of block 0) */
    chainId:
      '0xdcee8f92ac67f45b733e9d46c510d9d73d0d8310af7ba4ba0de2485e9128298b',
    /**
     * These endpoint(s) should be public non-pruned archive node
     * We recommend providing more than one endpoint for improved reliability, performance, and uptime
     * Public nodes may be rate limited, which can affect indexing speed
     * When developing your project we suggest getting a private API key
     * If you use a rate limited endpoint, adjust the --batch-size and --workers parameters
     * These settings can be found in your docker-compose.yaml, they will slow indexing but prevent your project being rate limited
     */
    endpoint: ['ws://3.15.163.97:40300'],
  },
  dataSources: [
    {
      kind: SubstrateDatasourceKind.Runtime,
      startBlock: 571000,
      mapping: {
        file: './dist/index.js',
        handlers: [
          {
            kind: SubstrateHandlerKind.Block,
            handler: 'handlerContractBlock',
          },
          {
            kind: SubstrateHandlerKind.Call,
            handler: 'handlerContractCall',
            filter: {
              module: 'contracts',
            },
          },
          {
            kind: SubstrateHandlerKind.Event,
            handler: 'handlerContractEvent',
            filter: {
              module: 'contracts',
              method: 'ContractEmitted',
            },
          },
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
