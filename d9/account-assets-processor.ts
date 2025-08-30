import cron from 'node-cron'
import { db, schema } from "./db";
import { getAccountAssets } from './querys/account-assets';
import { eq, gt, count } from 'drizzle-orm';
import retry from 'async-retry';

const redis = Bun.redis

async function refreshAccountAssets(id: string) {
  const assets = await getAccountAssets(id)

  await db.update(schema.account).set({
    d9Balance: assets.d9Balance.toString(),
    usdtBalance: assets.usdtBalance.toString(),
    greenPointsBalance: assets.greenPoints.toString(),
    mineBalance: assets.mineBalance.toString(),
  }).where(eq(schema.account.id, id))
}

async function processAssets() {
  let cursor = ''
  let hasMore = true
  let totalProcessed = 0
  const startTime = Date.now()
  const batchSize = 32 / 4 // 4 get Account Assets 占用4个Call

  try {
    await redis.set('account-assets-refreshing', "true")

    const [totalCountResult] = await db.select({ count: count() }).from(schema.account)
    const totalCount = totalCountResult.count
    await redis.set('account-assets-total-count', totalCount)
    await redis.set('account-assets-processed-count', 0)
    await redis.set('account-assets-remaining-count', totalCount)
    await redis.set('account-assets-start-time', startTime)

    while (hasMore) {
      try {
        const query = cursor
          ? db.select().from(schema.account).where(gt(schema.account.id, cursor)).limit(batchSize).orderBy(schema.account.id)
          : db.select().from(schema.account).limit(batchSize).orderBy(schema.account.id)

        const accounts = await query

        if (accounts.length === 0) {
          hasMore = false
          break
        }

        const promises = accounts.map(account =>
          retry(() => refreshAccountAssets(account.id), {
            retries: 3,
            minTimeout: 1000,
            maxTimeout: 5000
          }).catch(error => ({ error, accountId: account.id }))
        )

        const results = await Promise.allSettled(promises)
        
        const failures = results
          .filter(result => result.status === 'rejected' || (result.status === 'fulfilled' && result.value?.error))
          .length
        
        const successes = results.length - failures
        
        if (successes === 0) {
          console.error(`Complete batch failure: all ${accounts.length} accounts failed`)
          await redis.set('account-assets-error', `Complete batch failure: all ${accounts.length} accounts failed`)
          process.exit(1)
        }
        
        if (failures > 0) {
          console.warn(`Partial batch failure: ${failures}/${accounts.length} accounts failed`)
          await redis.set('account-assets-partial-failures', failures)
        }

        totalProcessed += accounts.length
        cursor = accounts[accounts.length - 1].id

        await redis.set('account-assets-processed-count', totalProcessed)
        await redis.set('account-assets-remaining-count', totalCount - totalProcessed)

        const currentTime = Date.now()
        const elapsedMinutes = (currentTime - startTime) / 60000
        const processedPerMinute = elapsedMinutes > 0 ? Math.round(totalProcessed / elapsedMinutes) : 0
        await redis.set('account-assets-processed-per-minute', processedPerMinute)

        hasMore = accounts.length === batchSize
      } catch (batchError) {
        console.error('Error processing batch:', batchError)
        await redis.set('account-assets-error', batchError.message)
        break
      }
    }

    await redis.set('account-assets-refreshing', "false")
    await redis.set('account-assets-refreshed-at', new Date().toISOString())
    await redis.set('account-assets-processed-count', totalProcessed)
    await redis.set('account-assets-remaining-count', Math.max(0, totalCount - totalProcessed))
  } catch (error) {
    console.error('Error in processAssets:', error)
    await redis.set('account-assets-refreshing', "false")
    await redis.set('account-assets-error', error.message)
    throw error
  }
}

cron.schedule('0 0 * * *', processAssets);

setInterval(async () => {
  // Print analysis of the account assets
  const refreshing = await redis.get('account-assets-refreshing')
  const refreshedAt = await redis.get('account-assets-refreshed-at')
  const processedCount = await redis.get('account-assets-processed-count')
  const remainingCount = await redis.get('account-assets-remaining-count')
  const processedPerMinute = await redis.get('account-assets-processed-per-minute')
  const totalCount = await redis.get('account-assets-total-count')
  console.log('-------------------Account Assets Analysis-------------------')
  console.log(`Account assets processing: ${refreshing ? 'Refreshing' : 'Not refreshing'}`)
  console.log(`Refreshed at: ${refreshedAt}`)
  console.log(`Processed count: ${processedCount}`)
  console.log(`Remaining count: ${remainingCount}`)
  console.log(`Processed per minute: ${processedPerMinute}`)
  console.log(`Total count: ${totalCount}`)
}, 5000)

// if (process.env.NODE_ENV !== 'production') {
  processAssets()
// }

process.on('SIGINT', async () => {
  await redis.set('account-assets-refreshing', "false")
  await redis.set('account-assets-processed-count', 0)
  await redis.set('account-assets-remaining-count', 0)
  await redis.set('account-assets-processed-per-minute', 0)
  await redis.set('account-assets-total-count', 0)
  redis.close();
  process.exit(0)
})
