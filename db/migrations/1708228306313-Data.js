module.exports = class Data1708228306313 {
    name = 'Data1708228306313'

    async up(db) {
        await db.query(`ALTER TABLE "burn" DROP CONSTRAINT "FK_8215b3eb87bdf68d4892109e54f"`)
        await db.query(`DROP INDEX "public"."IDX_8215b3eb87bdf68d4892109e54"`)
        await db.query(`ALTER TABLE "burn" RENAME COLUMN "who_id" TO "from_id"`)
        await db.query(`CREATE TABLE "burn_withdrawal" ("id" character varying NOT NULL, "block_number" integer NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "extrinsic_hash" text, "fee" numeric NOT NULL, "amount" numeric NOT NULL, "from_id" character varying, CONSTRAINT "PK_178a70accbfc15f0b79c1c2474a" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_5ea9444710424e7f39f8e2997d" ON "burn_withdrawal" ("block_number") `)
        await db.query(`CREATE INDEX "IDX_f1e84ec64c4df958949b3cb336" ON "burn_withdrawal" ("timestamp") `)
        await db.query(`CREATE INDEX "IDX_1bdcc40077d12f1fe46e3a0af2" ON "burn_withdrawal" ("extrinsic_hash") `)
        await db.query(`CREATE INDEX "IDX_94e6b527afdcdc36cf3225bbed" ON "burn_withdrawal" ("from_id") `)
        await db.query(`CREATE INDEX "IDX_8cd5fef1c2c203738e62a6f98b" ON "burn_withdrawal" ("amount") `)
        await db.query(`CREATE INDEX "IDX_0b6cf7b3cf51e357c6ed7f8118" ON "burn" ("from_id") `)
        await db.query(`ALTER TABLE "burn" ADD CONSTRAINT "FK_0b6cf7b3cf51e357c6ed7f8118c" FOREIGN KEY ("from_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "burn_withdrawal" ADD CONSTRAINT "FK_94e6b527afdcdc36cf3225bbed1" FOREIGN KEY ("from_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "burn" ADD CONSTRAINT "FK_8215b3eb87bdf68d4892109e54f" FOREIGN KEY ("who_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`CREATE INDEX "IDX_8215b3eb87bdf68d4892109e54" ON "burn" ("who_id") `)
        await db.query(`ALTER TABLE "burn" RENAME COLUMN "from_id" TO "who_id"`)
        await db.query(`DROP TABLE "burn_withdrawal"`)
        await db.query(`DROP INDEX "public"."IDX_5ea9444710424e7f39f8e2997d"`)
        await db.query(`DROP INDEX "public"."IDX_f1e84ec64c4df958949b3cb336"`)
        await db.query(`DROP INDEX "public"."IDX_1bdcc40077d12f1fe46e3a0af2"`)
        await db.query(`DROP INDEX "public"."IDX_94e6b527afdcdc36cf3225bbed"`)
        await db.query(`DROP INDEX "public"."IDX_8cd5fef1c2c203738e62a6f98b"`)
        await db.query(`DROP INDEX "public"."IDX_0b6cf7b3cf51e357c6ed7f8118"`)
        await db.query(`ALTER TABLE "burn" DROP CONSTRAINT "FK_0b6cf7b3cf51e357c6ed7f8118c"`)
        await db.query(`ALTER TABLE "burn_withdrawal" DROP CONSTRAINT "FK_94e6b527afdcdc36cf3225bbed1"`)
    }
}
