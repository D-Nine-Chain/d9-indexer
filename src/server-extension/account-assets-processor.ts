import { Arg, Field, Int, ObjectType, Query, Resolver } from 'type-graphql'
import type { EntityManager } from 'typeorm'
import { Redis } from 'ioredis'

const redis = new Redis(process.env.REDIS_URL as string)

@ObjectType()
export class AccountAssetsProcessorStatus {
  @Field(() => Boolean, { nullable: false })
  refreshing!: boolean

  @Field(() => String, { nullable: true })
  refreshedAt?: string

  @Field(() => Int, { nullable: false })
  processedCount!: number

  @Field(() => Int, { nullable: false })
  remainingCount!: number

  @Field(() => Int, { nullable: false })
  totalCount!: number

  @Field(() => Int, { nullable: false })
  processedPerMinute!: number

  @Field(() => String, { nullable: true })
  error?: string

  @Field(() => Int, { nullable: true })
  partialFailures?: number

  constructor(props: Partial<AccountAssetsProcessorStatus>) {
    Object.assign(this, props)
  }
}

@ObjectType()
export class AccountRanking {
  @Field(() => String, { nullable: false })
  accountId!: string

  @Field(() => String, { nullable: false })
  balance!: string

  @Field(() => Int, { nullable: false })
  rank!: number

  constructor(props: Partial<AccountRanking>) {
    Object.assign(this, props)
  }
}

@Resolver()
export class AccountAssetsProcessorResolver {
  constructor(private tx: () => Promise<EntityManager>) { }

  @Query(() => AccountAssetsProcessorStatus)
  async accountAssetsProcessorStatus(): Promise<AccountAssetsProcessorStatus> {
    const refreshing = await redis.get('account-assets-refreshing')
    const refreshedAt = await redis.get('account-assets-refreshed-at')
    const processedCount = await redis.get('account-assets-processed-count')
    const remainingCount = await redis.get('account-assets-remaining-count')
    const totalCount = await redis.get('account-assets-total-count')
    const processedPerMinute = await redis.get('account-assets-processed-per-minute')
    const error = await redis.get('account-assets-error')
    const partialFailures = await redis.get('account-assets-partial-failures')

    return new AccountAssetsProcessorStatus({
      refreshing: refreshing === 'true',
      refreshedAt: refreshedAt || undefined,
      processedCount: parseInt(processedCount || '0'),
      remainingCount: parseInt(remainingCount || '0'),
      totalCount: parseInt(totalCount || '0'),
      processedPerMinute: parseInt(processedPerMinute || '0'),
      error: error || undefined,
      partialFailures: partialFailures ? parseInt(partialFailures) : undefined
    })
  }

  @Query(() => [AccountRanking])
  async mineBalanceRanking(
    @Arg('limit', () => Int, { defaultValue: 100 }) limit: number
  ): Promise<AccountRanking[]> {
    const manager = await this.tx()
    
    const result = await manager.query(
      `
      SELECT 
        id as "accountId",
        mine_balance as balance,
        ROW_NUMBER() OVER (ORDER BY mine_balance DESC) as rank
      FROM account 
      WHERE mine_balance > 0
      ORDER BY mine_balance DESC
      LIMIT $1
      `,
      [limit]
    )

    return result.map((row: any) => new AccountRanking({
      accountId: row.accountId,
      balance: row.balance?.toString() || '0',
      rank: parseInt(row.rank)
    }))
  }

  @Query(() => [AccountRanking])
  async greenPointsRanking(
    @Arg('limit', () => Int, { defaultValue: 100 }) limit: number
  ): Promise<AccountRanking[]> {
    const manager = await this.tx()
    
    const result = await manager.query(
      `
      SELECT 
        id as "accountId",
        green_points_balance as balance,
        ROW_NUMBER() OVER (ORDER BY green_points_balance DESC) as rank
      FROM account 
      WHERE green_points_balance > 0
      ORDER BY green_points_balance DESC
      LIMIT $1
      `,
      [limit]
    )

    return result.map((row: any) => new AccountRanking({
      accountId: row.accountId,
      balance: row.balance?.toString() || '0',
      rank: parseInt(row.rank)
    }))
  }
}

