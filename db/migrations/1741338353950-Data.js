module.exports = class Data1741338353950 {
    name = 'Data1741338353950'

    async up(db) {
        await db.query(`ALTER TABLE "event" ADD "call_id" character varying`)
        await db.query(`ALTER TABLE "call" ADD "address_id" character varying`)
        await db.query(`CREATE INDEX "IDX_83cf1bd59aa4521ed882fa5145" ON "event" ("call_id") `)
        await db.query(`CREATE INDEX "IDX_9c3f8e7db62a8010e67e93a7f8" ON "call" ("address_id") `)
        await db.query(`ALTER TABLE "event" ADD CONSTRAINT "FK_83cf1bd59aa4521ed882fa51452" FOREIGN KEY ("call_id") REFERENCES "call"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "call" ADD CONSTRAINT "FK_9c3f8e7db62a8010e67e93a7f84" FOREIGN KEY ("address_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "event" DROP COLUMN "call_id"`)
        await db.query(`ALTER TABLE "call" DROP COLUMN "address_id"`)
        await db.query(`DROP INDEX "public"."IDX_83cf1bd59aa4521ed882fa5145"`)
        await db.query(`DROP INDEX "public"."IDX_9c3f8e7db62a8010e67e93a7f8"`)
        await db.query(`ALTER TABLE "event" DROP CONSTRAINT "FK_83cf1bd59aa4521ed882fa51452"`)
        await db.query(`ALTER TABLE "call" DROP CONSTRAINT "FK_9c3f8e7db62a8010e67e93a7f84"`)
    }
}
