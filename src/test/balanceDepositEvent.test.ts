import { subqlTest } from '@subql/testing'

// See https://academy.subquery.network/build/testing.html

subqlTest(
  'balance deposit event test', // Test name
  571647, // Block height to test at
  [], // Dependent entities
  [], // Expected entities
  'handlerBalanceDepositEvent', // handler name
)
