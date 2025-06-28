-- 最终答案：全国所有人拥有的绿色积分总量
WITH account_gp_increments AS (
    -- 商户获得的积分增量
    SELECT 
        merchant_id as account_id,
        merchant_gp as gp_increment
    FROM green_points_transaction 
    WHERE success = true AND merchant_id IS NOT NULL
    
    UNION ALL
    
    -- 消费者获得的积分增量  
    SELECT 
        consumer_id as account_id,
        consumer_gp as gp_increment
    FROM green_points_transaction 
    WHERE success = true AND consumer_id IS NOT NULL
),
account_totals AS (
    -- 计算每个账户的积分总和
    SELECT 
        account_id,
        SUM(gp_increment) as total_green_points
    FROM account_gp_increments
    GROUP BY account_id
)
SELECT 
    SUM(total_green_points) as total_green_points_all_users,
    COUNT(*) as total_accounts_with_points,
    ROUND(AVG(total_green_points), 2) as avg_points_per_account,
    MIN(total_green_points) as min_account_points,
    MAX(total_green_points) as max_account_points
FROM account_totals
WHERE total_green_points > 0;
