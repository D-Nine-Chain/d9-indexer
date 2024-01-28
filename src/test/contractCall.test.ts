import { subqlTest } from '@subql/testing'

// See https://academy.subquery.network/build/testing.html

subqlTest(
  'handler contract call test', // Test name
  571647, // Block height to test at
  [], // Dependent entities
  [], // Expected entities
  'handlerContractCall', // handler name
)
