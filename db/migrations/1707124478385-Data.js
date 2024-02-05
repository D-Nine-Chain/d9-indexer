module.exports = class Data1707124478385 {
    name = 'Data1707124478385'

    async up(db) {
        await db.query(`CREATE TABLE "cross_chain_commitment" ("id" character varying NOT NULL, "block_number" integer NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "extrinsic_hash" text, "tx_id" text NOT NULL, "amount" numeric NOT NULL, "from_id" character varying, CONSTRAINT "PK_336d8a8b1edbd6f5b6d633834c2" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_63194d4700983aa867e39cbb78" ON "cross_chain_commitment" ("block_number") `)
        await db.query(`CREATE INDEX "IDX_e99762e909c833e86624fa1bc1" ON "cross_chain_commitment" ("timestamp") `)
        await db.query(`CREATE INDEX "IDX_1e79ff252fcb99665c84498418" ON "cross_chain_commitment" ("extrinsic_hash") `)
        await db.query(`CREATE INDEX "IDX_930c82199dc2eb46162050a3ef" ON "cross_chain_commitment" ("tx_id") `)
        await db.query(`CREATE INDEX "IDX_8f8e4c04b3778b79c9c35c5208" ON "cross_chain_commitment" ("from_id") `)
        await db.query(`CREATE INDEX "IDX_1768e23ab56f5fbd09b3d71e0f" ON "cross_chain_commitment" ("amount") `)
        await db.query(`CREATE TABLE "cross_chain_dispatch" ("id" character varying NOT NULL, "block_number" integer NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "extrinsic_hash" text, "tx_id" text NOT NULL, "amount" numeric NOT NULL, "to_id" character varying, CONSTRAINT "PK_8fdacc97cad24214c4796a8f122" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_f1f267b1aebf7a7f017d412cf7" ON "cross_chain_dispatch" ("block_number") `)
        await db.query(`CREATE INDEX "IDX_8fe7a6c5d3aff5fa97778e6a2d" ON "cross_chain_dispatch" ("timestamp") `)
        await db.query(`CREATE INDEX "IDX_ee122742d4531671b40283b541" ON "cross_chain_dispatch" ("extrinsic_hash") `)
        await db.query(`CREATE INDEX "IDX_40d96990ad53dd6b33f466e0e2" ON "cross_chain_dispatch" ("tx_id") `)
        await db.query(`CREATE INDEX "IDX_f781cf0868d5703ba7f7f5b179" ON "cross_chain_dispatch" ("to_id") `)
        await db.query(`CREATE INDEX "IDX_8ff4836b56d801b3bffddfdb20" ON "cross_chain_dispatch" ("amount") `)
        await db.query(`ALTER TABLE "cross_chain_commitment" ADD CONSTRAINT "FK_8f8e4c04b3778b79c9c35c52086" FOREIGN KEY ("from_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "cross_chain_dispatch" ADD CONSTRAINT "FK_f781cf0868d5703ba7f7f5b1796" FOREIGN KEY ("to_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    }

    async down(db) {
        await db.query(`DROP TABLE "cross_chain_commitment"`)
        await db.query(`DROP INDEX "public"."IDX_63194d4700983aa867e39cbb78"`)
        await db.query(`DROP INDEX "public"."IDX_e99762e909c833e86624fa1bc1"`)
        await db.query(`DROP INDEX "public"."IDX_1e79ff252fcb99665c84498418"`)
        await db.query(`DROP INDEX "public"."IDX_930c82199dc2eb46162050a3ef"`)
        await db.query(`DROP INDEX "public"."IDX_8f8e4c04b3778b79c9c35c5208"`)
        await db.query(`DROP INDEX "public"."IDX_1768e23ab56f5fbd09b3d71e0f"`)
        await db.query(`DROP TABLE "cross_chain_dispatch"`)
        await db.query(`DROP INDEX "public"."IDX_f1f267b1aebf7a7f017d412cf7"`)
        await db.query(`DROP INDEX "public"."IDX_8fe7a6c5d3aff5fa97778e6a2d"`)
        await db.query(`DROP INDEX "public"."IDX_ee122742d4531671b40283b541"`)
        await db.query(`DROP INDEX "public"."IDX_40d96990ad53dd6b33f466e0e2"`)
        await db.query(`DROP INDEX "public"."IDX_f781cf0868d5703ba7f7f5b179"`)
        await db.query(`DROP INDEX "public"."IDX_8ff4836b56d801b3bffddfdb20"`)
        await db.query(`ALTER TABLE "cross_chain_commitment" DROP CONSTRAINT "FK_8f8e4c04b3778b79c9c35c52086"`)
        await db.query(`ALTER TABLE "cross_chain_dispatch" DROP CONSTRAINT "FK_f781cf0868d5703ba7f7f5b1796"`)
    }
}
