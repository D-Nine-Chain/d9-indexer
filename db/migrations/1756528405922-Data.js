module.exports = class Data1756528405922 {
    name = 'Data1756528405922'

    async up(db) {
        await db.query(`ALTER TABLE "account" ADD "d9_balance" numeric`)
        await db.query(`ALTER TABLE "account" ADD "usdt_balance" numeric`)
        await db.query(`ALTER TABLE "account" ADD "green_points_balance" numeric`)
        await db.query(`ALTER TABLE "account" ADD "mine_balance" numeric`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "account" DROP COLUMN "d9_balance"`)
        await db.query(`ALTER TABLE "account" DROP COLUMN "usdt_balance"`)
        await db.query(`ALTER TABLE "account" DROP COLUMN "green_points_balance"`)
        await db.query(`ALTER TABLE "account" DROP COLUMN "mine_balance"`)
    }
}
