module.exports = class Data1707020067237 {
    name = 'Data1707020067237'

    async up(db) {
        await db.query(`CREATE TABLE "withdraw" ("id" character varying NOT NULL, "block_number" integer NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "extrinsic_hash" text, "amount" numeric NOT NULL, "fee" numeric NOT NULL, "who_id" character varying, CONSTRAINT "PK_5c172f81689173f75bf5906ef22" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_6e902f01cf874c46b9973a95ed" ON "withdraw" ("block_number") `)
        await db.query(`CREATE INDEX "IDX_6bf791961dd76368fe56ed2b33" ON "withdraw" ("timestamp") `)
        await db.query(`CREATE INDEX "IDX_de38a0e1732a8cd1c51def6597" ON "withdraw" ("extrinsic_hash") `)
        await db.query(`CREATE INDEX "IDX_aa40aea5349deafd36afb3009b" ON "withdraw" ("who_id") `)
        await db.query(`CREATE INDEX "IDX_0279c25f260fa70b391224082f" ON "withdraw" ("amount") `)
        await db.query(`ALTER TABLE "withdraw" ADD CONSTRAINT "FK_aa40aea5349deafd36afb3009bd" FOREIGN KEY ("who_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    }

    async down(db) {
        await db.query(`DROP TABLE "withdraw"`)
        await db.query(`DROP INDEX "public"."IDX_6e902f01cf874c46b9973a95ed"`)
        await db.query(`DROP INDEX "public"."IDX_6bf791961dd76368fe56ed2b33"`)
        await db.query(`DROP INDEX "public"."IDX_de38a0e1732a8cd1c51def6597"`)
        await db.query(`DROP INDEX "public"."IDX_aa40aea5349deafd36afb3009b"`)
        await db.query(`DROP INDEX "public"."IDX_0279c25f260fa70b391224082f"`)
        await db.query(`ALTER TABLE "withdraw" DROP CONSTRAINT "FK_aa40aea5349deafd36afb3009bd"`)
    }
}
