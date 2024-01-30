import { subqlTest } from '@subql/testing'
subqlTest(
  'wasm test', // Test name
  439859, // Block height to test at
  [], // Dependent entities
  [], // Expected entities
  'handleWasm', // handler name
)
