import { subqlTest } from '@subql/testing'

// See https://academy.subquery.network/build/testing.html

subqlTest(
  'handleTransfer test', // Test name
  81148, // Block height to test at
  [], // Dependent entities
  [], // Expected entities
  'handlerBalanceDepositEvent', // handler name
)
