import { subqlTest } from '@subql/testing'

// See https://academy.subquery.network/build/testing.html

subqlTest(
  'block test', // Test name
  576104, // Block height to test at
  [], // Dependent entities
  [], // Expected entities
  'handleBlock', // handler name
)
