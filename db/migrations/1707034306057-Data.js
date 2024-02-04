module.exports = class Data1707034306057 {
    name = 'Data1707034306057'

    async up(db) {
        await db.query(`CREATE TABLE "burn" ("id" character varying NOT NULL, "block_number" integer NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "extrinsic_hash" text, "fee" numeric NOT NULL, "amount" numeric NOT NULL, "who_id" character varying, CONSTRAINT "PK_dcb4f14ee4534154b31116553f0" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_256979d718b3d192ec491aa210" ON "burn" ("block_number") `)
        await db.query(`CREATE INDEX "IDX_51879159280bddc67fbdbd9df9" ON "burn" ("timestamp") `)
        await db.query(`CREATE INDEX "IDX_49dd7ae3c7d28e7bf316150c7a" ON "burn" ("extrinsic_hash") `)
        await db.query(`CREATE INDEX "IDX_8215b3eb87bdf68d4892109e54" ON "burn" ("who_id") `)
        await db.query(`CREATE INDEX "IDX_15f0e2581cca352281879d5671" ON "burn" ("amount") `)
        await db.query(`ALTER TABLE "burn" ADD CONSTRAINT "FK_8215b3eb87bdf68d4892109e54f" FOREIGN KEY ("who_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    }

    async down(db) {
        await db.query(`DROP TABLE "burn"`)
        await db.query(`DROP INDEX "public"."IDX_256979d718b3d192ec491aa210"`)
        await db.query(`DROP INDEX "public"."IDX_51879159280bddc67fbdbd9df9"`)
        await db.query(`DROP INDEX "public"."IDX_49dd7ae3c7d28e7bf316150c7a"`)
        await db.query(`DROP INDEX "public"."IDX_8215b3eb87bdf68d4892109e54"`)
        await db.query(`DROP INDEX "public"."IDX_15f0e2581cca352281879d5671"`)
        await db.query(`ALTER TABLE "burn" DROP CONSTRAINT "FK_8215b3eb87bdf68d4892109e54f"`)
    }
}
