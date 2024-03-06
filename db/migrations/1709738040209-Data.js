module.exports = class Data1709738040209 {
    name = 'Data1709738040209'

    async up(db) {
        await db.query(`CREATE TABLE "merchant_subscription" ("id" character varying NOT NULL, "block_number" integer NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "extrinsic_hash" text, "fee" numeric NOT NULL, "expiry" TIMESTAMP WITH TIME ZONE NOT NULL, "who_id" character varying, CONSTRAINT "PK_6c92cb16e3b33e6f38222bbe0c2" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_5eca15a7517e2523fd39c869c2" ON "merchant_subscription" ("block_number") `)
        await db.query(`CREATE INDEX "IDX_8a5a5e36b3f441bd7e96f65b56" ON "merchant_subscription" ("timestamp") `)
        await db.query(`CREATE INDEX "IDX_5621cc004931447d81aaff35c3" ON "merchant_subscription" ("extrinsic_hash") `)
        await db.query(`CREATE INDEX "IDX_b4cc8f7b3562ac622ed225ba94" ON "merchant_subscription" ("who_id") `)
        await db.query(`CREATE TABLE "green_points_transaction" ("id" character varying NOT NULL, "block_number" integer NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "extrinsic_hash" text, "fee" numeric NOT NULL, "merchant_gp" numeric NOT NULL, "consumer_gp" numeric NOT NULL, "merchant_id" character varying, "consumer_id" character varying, CONSTRAINT "PK_b43261c583766efb4b5ccc81c86" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_3ccf1b62ca9e0be880ff213e01" ON "green_points_transaction" ("block_number") `)
        await db.query(`CREATE INDEX "IDX_6e5ecd161c77ed60d939656d0b" ON "green_points_transaction" ("timestamp") `)
        await db.query(`CREATE INDEX "IDX_cb1f4346ea375f8138e96c8a5d" ON "green_points_transaction" ("extrinsic_hash") `)
        await db.query(`CREATE INDEX "IDX_a2385a2c8d56bfdec7ea8439b7" ON "green_points_transaction" ("merchant_id") `)
        await db.query(`CREATE INDEX "IDX_7b3d25bbf2c66ec9967badb458" ON "green_points_transaction" ("consumer_id") `)
        await db.query(`ALTER TABLE "merchant_subscription" ADD CONSTRAINT "FK_b4cc8f7b3562ac622ed225ba94c" FOREIGN KEY ("who_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "green_points_transaction" ADD CONSTRAINT "FK_a2385a2c8d56bfdec7ea8439b7a" FOREIGN KEY ("merchant_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "green_points_transaction" ADD CONSTRAINT "FK_7b3d25bbf2c66ec9967badb4580" FOREIGN KEY ("consumer_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    }

    async down(db) {
        await db.query(`DROP TABLE "merchant_subscription"`)
        await db.query(`DROP INDEX "public"."IDX_5eca15a7517e2523fd39c869c2"`)
        await db.query(`DROP INDEX "public"."IDX_8a5a5e36b3f441bd7e96f65b56"`)
        await db.query(`DROP INDEX "public"."IDX_5621cc004931447d81aaff35c3"`)
        await db.query(`DROP INDEX "public"."IDX_b4cc8f7b3562ac622ed225ba94"`)
        await db.query(`DROP TABLE "green_points_transaction"`)
        await db.query(`DROP INDEX "public"."IDX_3ccf1b62ca9e0be880ff213e01"`)
        await db.query(`DROP INDEX "public"."IDX_6e5ecd161c77ed60d939656d0b"`)
        await db.query(`DROP INDEX "public"."IDX_cb1f4346ea375f8138e96c8a5d"`)
        await db.query(`DROP INDEX "public"."IDX_a2385a2c8d56bfdec7ea8439b7"`)
        await db.query(`DROP INDEX "public"."IDX_7b3d25bbf2c66ec9967badb458"`)
        await db.query(`ALTER TABLE "merchant_subscription" DROP CONSTRAINT "FK_b4cc8f7b3562ac622ed225ba94c"`)
        await db.query(`ALTER TABLE "green_points_transaction" DROP CONSTRAINT "FK_a2385a2c8d56bfdec7ea8439b7a"`)
        await db.query(`ALTER TABLE "green_points_transaction" DROP CONSTRAINT "FK_7b3d25bbf2c66ec9967badb4580"`)
    }
}
