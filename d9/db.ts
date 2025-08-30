import { SQL } from 'bun'
import { drizzle } from 'drizzle-orm/bun-sql'
import * as schema from '../drizzle/schema'
export * as schema from '../drizzle/schema'

const client = new SQL({
  host: process.env.DB_HOST as string,
  port: parseInt(process.env.DB_PORT as string),
  user: 'postgres',
  password: process.env.DB_PASS as string,
  database: process.env.DB_NAME as string,
  ssl: false,
})

export const db = drizzle(client, { schema })
