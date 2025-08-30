import { Arg, Field, ObjectType, Query, Resolver } from 'type-graphql'
import type { EntityManager } from 'typeorm'
import { MarketConversion } from '../model'

@ObjectType()
export class MarketTrade24H {
  @Field(() => String, { nullable: false })
  tradingVolume24H!: string

  @Field(() => Number, { nullable: true })
  percentageChange24H?: string

  @Field(() => Number, { nullable: false })
  tradeCount24H!: number

  constructor(props: Partial<MarketTrade24H>) {
    Object.assign(this, props)
  }
}

@Resolver()
export class MarketTradeCountResolver {
  constructor(private tx: () => Promise<EntityManager>) { }

  @Query(() => [MarketTrade24H])
  async trade24H() {
    const manager = await this.tx()
    
    const result = await manager.getRepository(MarketConversion).query(
      `
      WITH current_period_volume AS (
        SELECT
        coalesce(SUM(CASE WHEN to_token = 'D9' THEN lost ELSE got END), 0) AS volume
        FROM
          market_conversion
        WHERE
          timestamp >= NOW() - INTERVAL '24 HOURS'
      ), previous_period_volume AS (
        SELECT
        coalesce(SUM(CASE WHEN to_token = 'D9' THEN lost ELSE got END), 0) AS volume
        FROM
          market_conversion
        WHERE
          timestamp < NOW() - INTERVAL '24 HOURS'
          AND timestamp >= NOW() - INTERVAL '48 HOURS'
      ), trade_count_24h AS (
        SELECT
          COUNT(*) AS trade_count
        FROM
          market_conversion
        WHERE
          timestamp >= NOW() - INTERVAL '24 HOURS'
      ), volume_change AS (
        SELECT
          current_period_volume.volume AS current_volume,
          previous_period_volume.volume AS previous_volume,
          ((current_period_volume.volume - previous_period_volume.volume) / NULLIF(previous_period_volume.volume, 0)) * 100 AS percentage_change
        FROM
          current_period_volume, previous_period_volume
      )
      SELECT
        cast(current_volume as TEXT) AS "tradingVolume24H",
        percentage_change AS "percentageChange24H",
        trade_count AS "tradeCount24H"
      FROM
        volume_change, trade_count_24h;
      `,
    )
    return result
  }
}
