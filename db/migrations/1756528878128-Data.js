module.exports = class Data1756528878128 {
    name = 'Data1756528878128'

    async up(db) {
        await db.query(`CREATE INDEX "IDX_a1794e1af1c3b16c76f7c216b3" ON "account" ("d9_balance") `)
        await db.query(`CREATE INDEX "IDX_97ca34b44513640f642da1b790" ON "account" ("usdt_balance") `)
        await db.query(`CREATE INDEX "IDX_9fd14b77ca20fc8a67b8a37b32" ON "account" ("green_points_balance") `)
        await db.query(`CREATE INDEX "IDX_b092df7b8388e50aaba0686a5b" ON "account" ("mine_balance") `)
    }

    async down(db) {
        await db.query(`DROP INDEX "public"."IDX_a1794e1af1c3b16c76f7c216b3"`)
        await db.query(`DROP INDEX "public"."IDX_97ca34b44513640f642da1b790"`)
        await db.query(`DROP INDEX "public"."IDX_9fd14b77ca20fc8a67b8a37b32"`)
        await db.query(`DROP INDEX "public"."IDX_b092df7b8388e50aaba0686a5b"`)
    }
}
