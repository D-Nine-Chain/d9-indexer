import AggregatesPluggin from '@graphile/pg-aggregates'
import PgSimplifyInflectorPlugin from '@graphile-contrib/pg-simplify-inflector'
import Fastify, { type FastifyReply, type FastifyRequest } from 'fastify'
import type * as pg from 'pg';
import { gql, makeExtendSchemaPlugin, postgraphile, Plugin, type PostGraphileResponse, PostGraphileResponseFastify3 } from 'postgraphile';
import FilterPlugin from 'postgraphile-plugin-connection-filter';
import cors from '@fastify/cors'
import { Redis } from 'ioredis'

const app = Fastify({ logger: true })

const redis = new Redis(process.env.REDIS_URL as string)

// 配置 CORS，允许所有来源
app.register(cors, {
  origin: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
})

export const ProcessorStatusPlugin: Plugin = makeExtendSchemaPlugin((build, options) => {
  const schemas: string[] = options.stateSchemas;

  return {
    typeDefs: gql`
      type _ProcessorStatus {
        name: String!
        height: Int!
        hash: String!
      }

      extend type Query {
        squidStatus: _ProcessorStatus!
      }
    `,
    resolvers: {
      Query: {
        squidStatus: async (parentObject, args, context, info) => {
          const pgClient: pg.Client = context.pgClient;

          const { rows } = await pgClient.query(
            schemas
              .map((s) => `SELECT '${s}' as name , height, hash FROM ${s}.status`)
              .join(' UNION ALL '),
          );

          return rows[0] || {};
        }
      }
    }
  }
})

export const AccountAssetsProcessorPlugin: Plugin = makeExtendSchemaPlugin((build, options) => {
  return {
    typeDefs: gql`
      type AccountAssetsProcessorStatus {
        refreshing: Boolean!
        refreshedAt: String
        processedCount: Int!
        remainingCount: Int!
        totalCount: Int!
        processedPerMinute: Int!
        error: String
        partialFailures: Int
      }

      type AccountRanking {
        accountId: String!
        balance: String!
        rank: Int!
      }

      extend type Query {
        accountAssetsProcessorStatus: AccountAssetsProcessorStatus!
        mineBalanceRanking(limit: Int = 100, offset: Int = 0): [AccountRanking!]!
        greenPointsRanking(limit: Int = 100, offset: Int = 0): [AccountRanking!]!
      }
    `,
    resolvers: {
      Query: {
        accountAssetsProcessorStatus: async () => {
          const refreshing = await redis.get('account-assets-refreshing')
          const refreshedAt = await redis.get('account-assets-refreshed-at')
          const processedCount = await redis.get('account-assets-processed-count')
          const remainingCount = await redis.get('account-assets-remaining-count')
          const totalCount = await redis.get('account-assets-total-count')
          const processedPerMinute = await redis.get('account-assets-processed-per-minute')
          const error = await redis.get('account-assets-error')
          const partialFailures = await redis.get('account-assets-partial-failures')

          return {
            refreshing: refreshing === 'true',
            refreshedAt: refreshedAt || null,
            processedCount: parseInt(processedCount || '0'),
            remainingCount: parseInt(remainingCount || '0'),
            totalCount: parseInt(totalCount || '0'),
            processedPerMinute: parseInt(processedPerMinute || '0'),
            error: error || null,
            partialFailures: partialFailures ? parseInt(partialFailures) : null
          }
        },
        mineBalanceRanking: async (parentObject, args, context) => {
          const pgClient: pg.Client = context.pgClient;
          const limit = args.limit || 100;
          const offset = args.offset || 0;

          const { rows } = await pgClient.query(
            `
            SELECT 
              id as "accountId",
              mine_balance as balance,
              ROW_NUMBER() OVER (ORDER BY mine_balance DESC) as rank
            FROM account 
            WHERE mine_balance > 0
            ORDER BY mine_balance DESC
            LIMIT $1 OFFSET $2
            `,
            [Math.min(limit, 100), offset]
          );

          return rows.map((row: any) => ({
            accountId: row.accountId,
            balance: row.balance?.toString() || '0',
            rank: parseInt(row.rank)
          }));
        },
        greenPointsRanking: async (parentObject, args, context) => {
          const pgClient: pg.Client = context.pgClient;
          const limit = args.limit || 100;
          const offset = args.offset || 0;

          const { rows } = await pgClient.query(
            `
            SELECT 
              id as "accountId",
              green_points_balance as balance,
              ROW_NUMBER() OVER (ORDER BY green_points_balance DESC) as rank
            FROM account 
            WHERE green_points_balance > 0
            ORDER BY green_points_balance DESC
            LIMIT $1 OFFSET $2
            `,
            [Math.min(limit, 100), offset]
          );

          return rows.map((row: any) => ({
            accountId: row.accountId,
            balance: row.balance?.toString() || '0',
            rank: parseInt(row.rank)
          }));
        }
      }
    }
  }
})

const middleware = postgraphile(
  {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
    database: process.env.DB_NAME || 'postgres',
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASS || 'postgres',
  },
  'public',
  {
    graphiql: true,
    enhanceGraphiql: true,
    dynamicJson: true,
    disableDefaultMutations: true,
    disableQueryLog: true,
    skipPlugins: [],
    classicIds: true,
    appendPlugins: [
      AggregatesPluggin,
      FilterPlugin,
      PgSimplifyInflectorPlugin,
      ProcessorStatusPlugin,
      AccountAssetsProcessorPlugin,
    ],
    externalGraphqlRoute: process.env.BASE_PATH == null ? undefined : process.env.BASE_PATH + '/api/graphql',
    graphileBuildOptions: {
      stateSchemas: ['squid_processor'],
      // connectionFilterAllowedOperators: ['equal', 'notEqual', 'in', 'notIn', 'lessThan', 'lessThanOrEqual', 'greaterThan', 'greaterThanOrEqual'],
      pgQueryTimeout: 5000, // 5 seconds query timeout
      maxRows: 100, // 限制返回行数
    },
    // simpleCollections: 'only', // 简化集合查询
    enableQueryBatching: false, // 禁用查询批处理
    extendedErrors: ['errcode'],
    allowExplain: false, // 禁止 EXPLAIN 查询
    retryOnInitFail: true,
  },
);

const convertHandler = (handler: (res: PostGraphileResponse) => Promise<void>) => (request: FastifyRequest, reply: FastifyReply) => handler(new PostGraphileResponseFastify3(request, reply))

app.options(middleware.graphiqlRoute, convertHandler(middleware.graphqlRouteHandler))
app.post(middleware.graphqlRoute, convertHandler(middleware.graphqlRouteHandler))

app.head(middleware.graphiqlRoute, convertHandler(middleware.graphiqlRouteHandler!))
app.get(middleware.graphiqlRoute, convertHandler(middleware.graphiqlRouteHandler!))

const port = process.env.NGQL_PORT ? parseInt(process.env.NGQL_PORT) : 3000

app.listen({ port, host: '0.0.0.0' }, (err, address) => {
  if (err) {
    app.log.error(String(err));
    process.exit(1);
  }
  app.log.info(`PostGraphiQL available at ${address}${middleware.graphiqlRoute} 🚀`);
})

