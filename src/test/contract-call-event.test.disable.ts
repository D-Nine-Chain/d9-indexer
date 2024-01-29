import { subqlTest } from '@subql/testing'

// See https://academy.subquery.network/build/testing.html

subqlTest(
  'contract call event test', // Test name
  603092, // Block height to test at
  [], // Dependent entities
  [], // Expected entities
  'handleContractCallEvent', // handler name
)
