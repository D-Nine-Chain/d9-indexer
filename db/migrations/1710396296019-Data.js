module.exports = class Data1710396296019 {
    name = 'Data1710396296019'

    async up(db) {
        await db.query(`CREATE TABLE "transfer" ("id" character varying NOT NULL, "block_number" integer NOT NULL, "block_hash" text NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "extrinsic_hash" text NOT NULL, "fee" numeric NOT NULL, "amount" numeric NOT NULL, "token" character varying(4) NOT NULL, "from_id" character varying, "to_id" character varying, CONSTRAINT "PK_fd9ddbdd49a17afcbe014401295" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_d6624eacc30144ea97915fe846" ON "transfer" ("block_number") `)
        await db.query(`CREATE INDEX "IDX_0774176de46f3a8828b06dbf5c" ON "transfer" ("block_hash") `)
        await db.query(`CREATE INDEX "IDX_70ff8b624c3118ac3a4862d22c" ON "transfer" ("timestamp") `)
        await db.query(`CREATE INDEX "IDX_070c555a86b0b41a534a55a659" ON "transfer" ("extrinsic_hash") `)
        await db.query(`CREATE INDEX "IDX_76bdfed1a7eb27c6d8ecbb7349" ON "transfer" ("from_id") `)
        await db.query(`CREATE INDEX "IDX_0751309c66e97eac9ef1149362" ON "transfer" ("to_id") `)
        await db.query(`CREATE INDEX "IDX_f4007436c1b546ede08a4fd7ab" ON "transfer" ("amount") `)
        await db.query(`CREATE INDEX "IDX_66a60ee58d608783461be64c50" ON "transfer" ("token") `)
        await db.query(`CREATE TABLE "withdraw" ("id" character varying NOT NULL, "block_number" integer NOT NULL, "block_hash" text NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "extrinsic_hash" text NOT NULL, "fee" numeric NOT NULL, "amount" numeric NOT NULL, "who_id" character varying, CONSTRAINT "PK_5c172f81689173f75bf5906ef22" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_6e902f01cf874c46b9973a95ed" ON "withdraw" ("block_number") `)
        await db.query(`CREATE INDEX "IDX_788314372bcba1b3a63698f03e" ON "withdraw" ("block_hash") `)
        await db.query(`CREATE INDEX "IDX_6bf791961dd76368fe56ed2b33" ON "withdraw" ("timestamp") `)
        await db.query(`CREATE INDEX "IDX_de38a0e1732a8cd1c51def6597" ON "withdraw" ("extrinsic_hash") `)
        await db.query(`CREATE INDEX "IDX_aa40aea5349deafd36afb3009b" ON "withdraw" ("who_id") `)
        await db.query(`CREATE INDEX "IDX_0279c25f260fa70b391224082f" ON "withdraw" ("amount") `)
        await db.query(`CREATE TABLE "node_vote" ("id" character varying NOT NULL, "block_number" integer NOT NULL, "block_hash" text NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "extrinsic_hash" text NOT NULL, "fee" numeric NOT NULL, "amount" numeric NOT NULL, "burn_contract" text NOT NULL, "main_pool" text NOT NULL, "beneficiary_voter_id" character varying, CONSTRAINT "PK_04967b922aab25ed51c1a9c1894" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_2ee85c5f1c2ba3c77b1583f033" ON "node_vote" ("block_number") `)
        await db.query(`CREATE INDEX "IDX_2ed4039617ff179dc24fd4b72e" ON "node_vote" ("block_hash") `)
        await db.query(`CREATE INDEX "IDX_a108b4d346deeccb79c58dafd9" ON "node_vote" ("timestamp") `)
        await db.query(`CREATE INDEX "IDX_19117e8987ee1a74a4b03f3cfc" ON "node_vote" ("extrinsic_hash") `)
        await db.query(`CREATE INDEX "IDX_bc0da80f82334f63118852fb2a" ON "node_vote" ("beneficiary_voter_id") `)
        await db.query(`CREATE TABLE "burn_executed" ("id" character varying NOT NULL, "block_number" integer NOT NULL, "block_hash" text NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "extrinsic_hash" text NOT NULL, "fee" numeric NOT NULL, "amount" numeric NOT NULL, "from_id" character varying, CONSTRAINT "PK_7ac9215e36ebc7c9c9b03baab6f" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_f70d8457751cf5a78cf53b8aa2" ON "burn_executed" ("block_number") `)
        await db.query(`CREATE INDEX "IDX_3b11053856963a744f40c83c5f" ON "burn_executed" ("block_hash") `)
        await db.query(`CREATE INDEX "IDX_fc1d9d5498864a00488971e851" ON "burn_executed" ("timestamp") `)
        await db.query(`CREATE INDEX "IDX_b53f0cfdc80c7f70b8d14e8ac9" ON "burn_executed" ("extrinsic_hash") `)
        await db.query(`CREATE INDEX "IDX_5f97fd9194eb22f723cbcc45cc" ON "burn_executed" ("from_id") `)
        await db.query(`CREATE INDEX "IDX_1dd813665adef8278106bb7680" ON "burn_executed" ("amount") `)
        await db.query(`CREATE TABLE "burn_withdrawal" ("id" character varying NOT NULL, "block_number" integer NOT NULL, "block_hash" text NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "extrinsic_hash" text NOT NULL, "fee" numeric NOT NULL, "amount" numeric NOT NULL, "from_id" character varying, CONSTRAINT "PK_178a70accbfc15f0b79c1c2474a" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_5ea9444710424e7f39f8e2997d" ON "burn_withdrawal" ("block_number") `)
        await db.query(`CREATE INDEX "IDX_a5ec66399f0026646f6813f3b5" ON "burn_withdrawal" ("block_hash") `)
        await db.query(`CREATE INDEX "IDX_f1e84ec64c4df958949b3cb336" ON "burn_withdrawal" ("timestamp") `)
        await db.query(`CREATE INDEX "IDX_1bdcc40077d12f1fe46e3a0af2" ON "burn_withdrawal" ("extrinsic_hash") `)
        await db.query(`CREATE INDEX "IDX_94e6b527afdcdc36cf3225bbed" ON "burn_withdrawal" ("from_id") `)
        await db.query(`CREATE INDEX "IDX_8cd5fef1c2c203738e62a6f98b" ON "burn_withdrawal" ("amount") `)
        await db.query(`CREATE TABLE "cross_chain_commit_created" ("id" character varying NOT NULL, "block_number" integer NOT NULL, "block_hash" text NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "extrinsic_hash" text NOT NULL, "tx_id" text NOT NULL, "amount" numeric NOT NULL, "from_id" character varying, CONSTRAINT "PK_fabb6d842f5181f85f60fb9c0ef" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_793a4f8d168b816a445a559e5c" ON "cross_chain_commit_created" ("block_number") `)
        await db.query(`CREATE INDEX "IDX_72ea4d31ef1435d6b9f98d0ee9" ON "cross_chain_commit_created" ("block_hash") `)
        await db.query(`CREATE INDEX "IDX_ee8fa62090924a7c2dbf1af7a1" ON "cross_chain_commit_created" ("timestamp") `)
        await db.query(`CREATE INDEX "IDX_d533db00791afc91b2ed76e205" ON "cross_chain_commit_created" ("extrinsic_hash") `)
        await db.query(`CREATE INDEX "IDX_910843f96e39e2a6fd4c147414" ON "cross_chain_commit_created" ("tx_id") `)
        await db.query(`CREATE INDEX "IDX_28dc7a90b293d09395a7c23f33" ON "cross_chain_commit_created" ("from_id") `)
        await db.query(`CREATE INDEX "IDX_ae97e39932a7b8aadc11d37829" ON "cross_chain_commit_created" ("amount") `)
        await db.query(`CREATE TABLE "cross_chain_dispatch_completed" ("id" character varying NOT NULL, "block_number" integer NOT NULL, "block_hash" text NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "extrinsic_hash" text NOT NULL, "tx_id" text NOT NULL, "amount" numeric NOT NULL, "to_id" character varying, CONSTRAINT "PK_011d2908e23209221be665512e1" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_68b95e23c2f2026c31b4330a21" ON "cross_chain_dispatch_completed" ("block_number") `)
        await db.query(`CREATE INDEX "IDX_e9deb11e98272d1f247893f336" ON "cross_chain_dispatch_completed" ("block_hash") `)
        await db.query(`CREATE INDEX "IDX_1a06f976127f923bae1151bff0" ON "cross_chain_dispatch_completed" ("timestamp") `)
        await db.query(`CREATE INDEX "IDX_891eec536d70f9539242290ad1" ON "cross_chain_dispatch_completed" ("extrinsic_hash") `)
        await db.query(`CREATE INDEX "IDX_af40bf64adcc77f9239d002f24" ON "cross_chain_dispatch_completed" ("tx_id") `)
        await db.query(`CREATE INDEX "IDX_c4902a1e2424144733bc46898f" ON "cross_chain_dispatch_completed" ("to_id") `)
        await db.query(`CREATE INDEX "IDX_e1dd3cb8870e7a6d003d35a0fb" ON "cross_chain_dispatch_completed" ("amount") `)
        await db.query(`CREATE TABLE "liquidity_added" ("id" character varying NOT NULL, "block_number" integer NOT NULL, "block_hash" text NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "extrinsic_hash" text NOT NULL, "fee" numeric NOT NULL, "d9" numeric NOT NULL, "usdt" numeric NOT NULL, "who_id" character varying, CONSTRAINT "PK_82400b724e5457d848c491dc015" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_e8c426ab783e95aa3f424e64bb" ON "liquidity_added" ("block_number") `)
        await db.query(`CREATE INDEX "IDX_7240d5ff3c2eb10f3c407077dc" ON "liquidity_added" ("block_hash") `)
        await db.query(`CREATE INDEX "IDX_fa2e53c8c14f1205a4d8b4effa" ON "liquidity_added" ("timestamp") `)
        await db.query(`CREATE INDEX "IDX_6669af7563a0ed0304e90700b2" ON "liquidity_added" ("extrinsic_hash") `)
        await db.query(`CREATE INDEX "IDX_066d02329a7a9eb674c77e2591" ON "liquidity_added" ("who_id") `)
        await db.query(`CREATE TABLE "liquidity_removed" ("id" character varying NOT NULL, "block_number" integer NOT NULL, "block_hash" text NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "extrinsic_hash" text NOT NULL, "fee" numeric NOT NULL, "d9" numeric NOT NULL, "usdt" numeric NOT NULL, "who_id" character varying, CONSTRAINT "PK_9bdb0c3de98a7f82ec6d8e166e6" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_7ca1c5739e1bf3640dee812e7f" ON "liquidity_removed" ("block_number") `)
        await db.query(`CREATE INDEX "IDX_83450ba25deee4b94e4953f54d" ON "liquidity_removed" ("block_hash") `)
        await db.query(`CREATE INDEX "IDX_46419282416ce0179e259b0297" ON "liquidity_removed" ("timestamp") `)
        await db.query(`CREATE INDEX "IDX_960b4c6ebd6b256415dd969c54" ON "liquidity_removed" ("extrinsic_hash") `)
        await db.query(`CREATE INDEX "IDX_39ebfa87db993b4c24f65da444" ON "liquidity_removed" ("who_id") `)
        await db.query(`CREATE TABLE "market_conversion" ("id" character varying NOT NULL, "block_number" integer NOT NULL, "block_hash" text NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "extrinsic_hash" text NOT NULL, "fee" numeric NOT NULL, "from_token" character varying(4) NOT NULL, "to_token" character varying(4) NOT NULL, "lost" numeric NOT NULL, "got" numeric NOT NULL, "who_id" character varying, CONSTRAINT "PK_36e42cfa2a1351db00b8025ec36" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_7e26889b4fbae21143f5efd5b2" ON "market_conversion" ("block_number") `)
        await db.query(`CREATE INDEX "IDX_e068a0b11fa3b254ae4865237d" ON "market_conversion" ("block_hash") `)
        await db.query(`CREATE INDEX "IDX_9042cb62a0798abdc4e35887da" ON "market_conversion" ("timestamp") `)
        await db.query(`CREATE INDEX "IDX_e58bd150577b98a483bb0e98a6" ON "market_conversion" ("extrinsic_hash") `)
        await db.query(`CREATE INDEX "IDX_8cbca5e4f6c7ffaeab221aca8d" ON "market_conversion" ("who_id") `)
        await db.query(`CREATE TABLE "merchant_subscription_extended" ("id" character varying NOT NULL, "block_number" integer NOT NULL, "block_hash" text NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "extrinsic_hash" text NOT NULL, "fee" numeric NOT NULL, "expiry" TIMESTAMP WITH TIME ZONE NOT NULL, "amount" numeric NOT NULL, "payment_token" character varying(4) NOT NULL, "who_id" character varying, CONSTRAINT "PK_73f3250686c76cfc73c620254c4" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_498533fbf382d696b26767abc9" ON "merchant_subscription_extended" ("block_number") `)
        await db.query(`CREATE INDEX "IDX_0ba7185dc3f21dff2d894a8520" ON "merchant_subscription_extended" ("block_hash") `)
        await db.query(`CREATE INDEX "IDX_d7c1ea3458eb081e4e3d0109a4" ON "merchant_subscription_extended" ("timestamp") `)
        await db.query(`CREATE INDEX "IDX_efb5a8faa6ef32aacdb728e1cb" ON "merchant_subscription_extended" ("extrinsic_hash") `)
        await db.query(`CREATE INDEX "IDX_fecbe1491c3027973a007d7e8c" ON "merchant_subscription_extended" ("who_id") `)
        await db.query(`CREATE TABLE "merchant_redeemed" ("id" character varying NOT NULL, "block_number" integer NOT NULL, "block_hash" text NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "extrinsic_hash" text NOT NULL, "fee" numeric NOT NULL, "token" character varying(4) NOT NULL, "amount" numeric NOT NULL, "who_id" character varying, CONSTRAINT "PK_e02228620701d70ed6b0a0513bf" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_b64382043c672cf167c36915c7" ON "merchant_redeemed" ("block_number") `)
        await db.query(`CREATE INDEX "IDX_09a3b52dc58d8f9bca804dc99c" ON "merchant_redeemed" ("block_hash") `)
        await db.query(`CREATE INDEX "IDX_376073cc34baa9dc56b05ab682" ON "merchant_redeemed" ("timestamp") `)
        await db.query(`CREATE INDEX "IDX_8ec23a64252efb4aaf46d2be4e" ON "merchant_redeemed" ("extrinsic_hash") `)
        await db.query(`CREATE INDEX "IDX_f2ddac68d6bb8ea3b15951b659" ON "merchant_redeemed" ("who_id") `)
        await db.query(`CREATE TABLE "green_points_transaction" ("id" character varying NOT NULL, "block_number" integer NOT NULL, "block_hash" text NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "extrinsic_hash" text NOT NULL, "fee" numeric NOT NULL, "merchant_gp" numeric NOT NULL, "consumer_gp" numeric NOT NULL, "merchant_id" character varying, "consumer_id" character varying, CONSTRAINT "PK_b43261c583766efb4b5ccc81c86" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_3ccf1b62ca9e0be880ff213e01" ON "green_points_transaction" ("block_number") `)
        await db.query(`CREATE INDEX "IDX_cc3646c3cf40679c421911dac8" ON "green_points_transaction" ("block_hash") `)
        await db.query(`CREATE INDEX "IDX_6e5ecd161c77ed60d939656d0b" ON "green_points_transaction" ("timestamp") `)
        await db.query(`CREATE INDEX "IDX_cb1f4346ea375f8138e96c8a5d" ON "green_points_transaction" ("extrinsic_hash") `)
        await db.query(`CREATE INDEX "IDX_a2385a2c8d56bfdec7ea8439b7" ON "green_points_transaction" ("merchant_id") `)
        await db.query(`CREATE INDEX "IDX_7b3d25bbf2c66ec9967badb458" ON "green_points_transaction" ("consumer_id") `)
        await db.query(`CREATE TABLE "merchant_payment_sent" ("id" character varying NOT NULL, "block_number" integer NOT NULL, "block_hash" text NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "extrinsic_hash" text NOT NULL, "fee" numeric NOT NULL, "amount" numeric NOT NULL, "payment_token" character varying(4) NOT NULL, "merchant_id" character varying, "consumer_id" character varying, CONSTRAINT "PK_d80090e8b40bb42855e99a3f0d5" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_8a7da6bd438ef7d338a1d9ef24" ON "merchant_payment_sent" ("block_number") `)
        await db.query(`CREATE INDEX "IDX_2e3a8eefe93712eac8d62aa325" ON "merchant_payment_sent" ("block_hash") `)
        await db.query(`CREATE INDEX "IDX_76948cada2a2956a080d20e33c" ON "merchant_payment_sent" ("timestamp") `)
        await db.query(`CREATE INDEX "IDX_d56cb1bbf84d8be8eecce28891" ON "merchant_payment_sent" ("extrinsic_hash") `)
        await db.query(`CREATE INDEX "IDX_8260de7d338ff54ae1eeaab281" ON "merchant_payment_sent" ("merchant_id") `)
        await db.query(`CREATE INDEX "IDX_94d4df0286b9aa2c3f1fad30d8" ON "merchant_payment_sent" ("consumer_id") `)
        await db.query(`CREATE TABLE "account" ("id" character varying NOT NULL, CONSTRAINT "PK_54115ee388cdb6d86bb4bf5b2ea" PRIMARY KEY ("id"))`)
        await db.query(`CREATE TABLE "node_reward_paid" ("id" character varying NOT NULL, "block_number" integer NOT NULL, "block_hash" text NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "extrinsic_hash" text NOT NULL, "fee" numeric NOT NULL, "amount" numeric NOT NULL, "node_id" character varying, "receiver_id" character varying, CONSTRAINT "PK_2bd8384195bd8e43c1912cb0c34" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_42b939f852084380307cc62022" ON "node_reward_paid" ("block_number") `)
        await db.query(`CREATE INDEX "IDX_65b06323ae4e200ba86b0a6564" ON "node_reward_paid" ("block_hash") `)
        await db.query(`CREATE INDEX "IDX_b3d0968d8108ee4fd728096f57" ON "node_reward_paid" ("timestamp") `)
        await db.query(`CREATE INDEX "IDX_bb9eceaa0cdb03ee56e6386da3" ON "node_reward_paid" ("extrinsic_hash") `)
        await db.query(`CREATE INDEX "IDX_df2e0f731cfe88eb5bc3747f6c" ON "node_reward_paid" ("node_id") `)
        await db.query(`CREATE INDEX "IDX_632cc7269f2bd93d6bb3af734f" ON "node_reward_paid" ("receiver_id") `)
        await db.query(`ALTER TABLE "transfer" ADD CONSTRAINT "FK_76bdfed1a7eb27c6d8ecbb73496" FOREIGN KEY ("from_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "transfer" ADD CONSTRAINT "FK_0751309c66e97eac9ef11493623" FOREIGN KEY ("to_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "withdraw" ADD CONSTRAINT "FK_aa40aea5349deafd36afb3009bd" FOREIGN KEY ("who_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "node_vote" ADD CONSTRAINT "FK_bc0da80f82334f63118852fb2a0" FOREIGN KEY ("beneficiary_voter_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "burn_executed" ADD CONSTRAINT "FK_5f97fd9194eb22f723cbcc45cc6" FOREIGN KEY ("from_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "burn_withdrawal" ADD CONSTRAINT "FK_94e6b527afdcdc36cf3225bbed1" FOREIGN KEY ("from_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "cross_chain_commit_created" ADD CONSTRAINT "FK_28dc7a90b293d09395a7c23f333" FOREIGN KEY ("from_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "cross_chain_dispatch_completed" ADD CONSTRAINT "FK_c4902a1e2424144733bc46898fc" FOREIGN KEY ("to_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "liquidity_added" ADD CONSTRAINT "FK_066d02329a7a9eb674c77e25918" FOREIGN KEY ("who_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "liquidity_removed" ADD CONSTRAINT "FK_39ebfa87db993b4c24f65da4443" FOREIGN KEY ("who_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "market_conversion" ADD CONSTRAINT "FK_8cbca5e4f6c7ffaeab221aca8d0" FOREIGN KEY ("who_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "merchant_subscription_extended" ADD CONSTRAINT "FK_fecbe1491c3027973a007d7e8c8" FOREIGN KEY ("who_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "merchant_redeemed" ADD CONSTRAINT "FK_f2ddac68d6bb8ea3b15951b659d" FOREIGN KEY ("who_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "green_points_transaction" ADD CONSTRAINT "FK_a2385a2c8d56bfdec7ea8439b7a" FOREIGN KEY ("merchant_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "green_points_transaction" ADD CONSTRAINT "FK_7b3d25bbf2c66ec9967badb4580" FOREIGN KEY ("consumer_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "merchant_payment_sent" ADD CONSTRAINT "FK_8260de7d338ff54ae1eeaab2813" FOREIGN KEY ("merchant_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "merchant_payment_sent" ADD CONSTRAINT "FK_94d4df0286b9aa2c3f1fad30d80" FOREIGN KEY ("consumer_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "node_reward_paid" ADD CONSTRAINT "FK_df2e0f731cfe88eb5bc3747f6c5" FOREIGN KEY ("node_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "node_reward_paid" ADD CONSTRAINT "FK_632cc7269f2bd93d6bb3af734fb" FOREIGN KEY ("receiver_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    }

    async down(db) {
        await db.query(`DROP TABLE "transfer"`)
        await db.query(`DROP INDEX "public"."IDX_d6624eacc30144ea97915fe846"`)
        await db.query(`DROP INDEX "public"."IDX_0774176de46f3a8828b06dbf5c"`)
        await db.query(`DROP INDEX "public"."IDX_70ff8b624c3118ac3a4862d22c"`)
        await db.query(`DROP INDEX "public"."IDX_070c555a86b0b41a534a55a659"`)
        await db.query(`DROP INDEX "public"."IDX_76bdfed1a7eb27c6d8ecbb7349"`)
        await db.query(`DROP INDEX "public"."IDX_0751309c66e97eac9ef1149362"`)
        await db.query(`DROP INDEX "public"."IDX_f4007436c1b546ede08a4fd7ab"`)
        await db.query(`DROP INDEX "public"."IDX_66a60ee58d608783461be64c50"`)
        await db.query(`DROP TABLE "withdraw"`)
        await db.query(`DROP INDEX "public"."IDX_6e902f01cf874c46b9973a95ed"`)
        await db.query(`DROP INDEX "public"."IDX_788314372bcba1b3a63698f03e"`)
        await db.query(`DROP INDEX "public"."IDX_6bf791961dd76368fe56ed2b33"`)
        await db.query(`DROP INDEX "public"."IDX_de38a0e1732a8cd1c51def6597"`)
        await db.query(`DROP INDEX "public"."IDX_aa40aea5349deafd36afb3009b"`)
        await db.query(`DROP INDEX "public"."IDX_0279c25f260fa70b391224082f"`)
        await db.query(`DROP TABLE "node_vote"`)
        await db.query(`DROP INDEX "public"."IDX_2ee85c5f1c2ba3c77b1583f033"`)
        await db.query(`DROP INDEX "public"."IDX_2ed4039617ff179dc24fd4b72e"`)
        await db.query(`DROP INDEX "public"."IDX_a108b4d346deeccb79c58dafd9"`)
        await db.query(`DROP INDEX "public"."IDX_19117e8987ee1a74a4b03f3cfc"`)
        await db.query(`DROP INDEX "public"."IDX_bc0da80f82334f63118852fb2a"`)
        await db.query(`DROP TABLE "burn_executed"`)
        await db.query(`DROP INDEX "public"."IDX_f70d8457751cf5a78cf53b8aa2"`)
        await db.query(`DROP INDEX "public"."IDX_3b11053856963a744f40c83c5f"`)
        await db.query(`DROP INDEX "public"."IDX_fc1d9d5498864a00488971e851"`)
        await db.query(`DROP INDEX "public"."IDX_b53f0cfdc80c7f70b8d14e8ac9"`)
        await db.query(`DROP INDEX "public"."IDX_5f97fd9194eb22f723cbcc45cc"`)
        await db.query(`DROP INDEX "public"."IDX_1dd813665adef8278106bb7680"`)
        await db.query(`DROP TABLE "burn_withdrawal"`)
        await db.query(`DROP INDEX "public"."IDX_5ea9444710424e7f39f8e2997d"`)
        await db.query(`DROP INDEX "public"."IDX_a5ec66399f0026646f6813f3b5"`)
        await db.query(`DROP INDEX "public"."IDX_f1e84ec64c4df958949b3cb336"`)
        await db.query(`DROP INDEX "public"."IDX_1bdcc40077d12f1fe46e3a0af2"`)
        await db.query(`DROP INDEX "public"."IDX_94e6b527afdcdc36cf3225bbed"`)
        await db.query(`DROP INDEX "public"."IDX_8cd5fef1c2c203738e62a6f98b"`)
        await db.query(`DROP TABLE "cross_chain_commit_created"`)
        await db.query(`DROP INDEX "public"."IDX_793a4f8d168b816a445a559e5c"`)
        await db.query(`DROP INDEX "public"."IDX_72ea4d31ef1435d6b9f98d0ee9"`)
        await db.query(`DROP INDEX "public"."IDX_ee8fa62090924a7c2dbf1af7a1"`)
        await db.query(`DROP INDEX "public"."IDX_d533db00791afc91b2ed76e205"`)
        await db.query(`DROP INDEX "public"."IDX_910843f96e39e2a6fd4c147414"`)
        await db.query(`DROP INDEX "public"."IDX_28dc7a90b293d09395a7c23f33"`)
        await db.query(`DROP INDEX "public"."IDX_ae97e39932a7b8aadc11d37829"`)
        await db.query(`DROP TABLE "cross_chain_dispatch_completed"`)
        await db.query(`DROP INDEX "public"."IDX_68b95e23c2f2026c31b4330a21"`)
        await db.query(`DROP INDEX "public"."IDX_e9deb11e98272d1f247893f336"`)
        await db.query(`DROP INDEX "public"."IDX_1a06f976127f923bae1151bff0"`)
        await db.query(`DROP INDEX "public"."IDX_891eec536d70f9539242290ad1"`)
        await db.query(`DROP INDEX "public"."IDX_af40bf64adcc77f9239d002f24"`)
        await db.query(`DROP INDEX "public"."IDX_c4902a1e2424144733bc46898f"`)
        await db.query(`DROP INDEX "public"."IDX_e1dd3cb8870e7a6d003d35a0fb"`)
        await db.query(`DROP TABLE "liquidity_added"`)
        await db.query(`DROP INDEX "public"."IDX_e8c426ab783e95aa3f424e64bb"`)
        await db.query(`DROP INDEX "public"."IDX_7240d5ff3c2eb10f3c407077dc"`)
        await db.query(`DROP INDEX "public"."IDX_fa2e53c8c14f1205a4d8b4effa"`)
        await db.query(`DROP INDEX "public"."IDX_6669af7563a0ed0304e90700b2"`)
        await db.query(`DROP INDEX "public"."IDX_066d02329a7a9eb674c77e2591"`)
        await db.query(`DROP TABLE "liquidity_removed"`)
        await db.query(`DROP INDEX "public"."IDX_7ca1c5739e1bf3640dee812e7f"`)
        await db.query(`DROP INDEX "public"."IDX_83450ba25deee4b94e4953f54d"`)
        await db.query(`DROP INDEX "public"."IDX_46419282416ce0179e259b0297"`)
        await db.query(`DROP INDEX "public"."IDX_960b4c6ebd6b256415dd969c54"`)
        await db.query(`DROP INDEX "public"."IDX_39ebfa87db993b4c24f65da444"`)
        await db.query(`DROP TABLE "market_conversion"`)
        await db.query(`DROP INDEX "public"."IDX_7e26889b4fbae21143f5efd5b2"`)
        await db.query(`DROP INDEX "public"."IDX_e068a0b11fa3b254ae4865237d"`)
        await db.query(`DROP INDEX "public"."IDX_9042cb62a0798abdc4e35887da"`)
        await db.query(`DROP INDEX "public"."IDX_e58bd150577b98a483bb0e98a6"`)
        await db.query(`DROP INDEX "public"."IDX_8cbca5e4f6c7ffaeab221aca8d"`)
        await db.query(`DROP TABLE "merchant_subscription_extended"`)
        await db.query(`DROP INDEX "public"."IDX_498533fbf382d696b26767abc9"`)
        await db.query(`DROP INDEX "public"."IDX_0ba7185dc3f21dff2d894a8520"`)
        await db.query(`DROP INDEX "public"."IDX_d7c1ea3458eb081e4e3d0109a4"`)
        await db.query(`DROP INDEX "public"."IDX_efb5a8faa6ef32aacdb728e1cb"`)
        await db.query(`DROP INDEX "public"."IDX_fecbe1491c3027973a007d7e8c"`)
        await db.query(`DROP TABLE "merchant_redeemed"`)
        await db.query(`DROP INDEX "public"."IDX_b64382043c672cf167c36915c7"`)
        await db.query(`DROP INDEX "public"."IDX_09a3b52dc58d8f9bca804dc99c"`)
        await db.query(`DROP INDEX "public"."IDX_376073cc34baa9dc56b05ab682"`)
        await db.query(`DROP INDEX "public"."IDX_8ec23a64252efb4aaf46d2be4e"`)
        await db.query(`DROP INDEX "public"."IDX_f2ddac68d6bb8ea3b15951b659"`)
        await db.query(`DROP TABLE "green_points_transaction"`)
        await db.query(`DROP INDEX "public"."IDX_3ccf1b62ca9e0be880ff213e01"`)
        await db.query(`DROP INDEX "public"."IDX_cc3646c3cf40679c421911dac8"`)
        await db.query(`DROP INDEX "public"."IDX_6e5ecd161c77ed60d939656d0b"`)
        await db.query(`DROP INDEX "public"."IDX_cb1f4346ea375f8138e96c8a5d"`)
        await db.query(`DROP INDEX "public"."IDX_a2385a2c8d56bfdec7ea8439b7"`)
        await db.query(`DROP INDEX "public"."IDX_7b3d25bbf2c66ec9967badb458"`)
        await db.query(`DROP TABLE "merchant_payment_sent"`)
        await db.query(`DROP INDEX "public"."IDX_8a7da6bd438ef7d338a1d9ef24"`)
        await db.query(`DROP INDEX "public"."IDX_2e3a8eefe93712eac8d62aa325"`)
        await db.query(`DROP INDEX "public"."IDX_76948cada2a2956a080d20e33c"`)
        await db.query(`DROP INDEX "public"."IDX_d56cb1bbf84d8be8eecce28891"`)
        await db.query(`DROP INDEX "public"."IDX_8260de7d338ff54ae1eeaab281"`)
        await db.query(`DROP INDEX "public"."IDX_94d4df0286b9aa2c3f1fad30d8"`)
        await db.query(`DROP TABLE "account"`)
        await db.query(`DROP TABLE "node_reward_paid"`)
        await db.query(`DROP INDEX "public"."IDX_42b939f852084380307cc62022"`)
        await db.query(`DROP INDEX "public"."IDX_65b06323ae4e200ba86b0a6564"`)
        await db.query(`DROP INDEX "public"."IDX_b3d0968d8108ee4fd728096f57"`)
        await db.query(`DROP INDEX "public"."IDX_bb9eceaa0cdb03ee56e6386da3"`)
        await db.query(`DROP INDEX "public"."IDX_df2e0f731cfe88eb5bc3747f6c"`)
        await db.query(`DROP INDEX "public"."IDX_632cc7269f2bd93d6bb3af734f"`)
        await db.query(`ALTER TABLE "transfer" DROP CONSTRAINT "FK_76bdfed1a7eb27c6d8ecbb73496"`)
        await db.query(`ALTER TABLE "transfer" DROP CONSTRAINT "FK_0751309c66e97eac9ef11493623"`)
        await db.query(`ALTER TABLE "withdraw" DROP CONSTRAINT "FK_aa40aea5349deafd36afb3009bd"`)
        await db.query(`ALTER TABLE "node_vote" DROP CONSTRAINT "FK_bc0da80f82334f63118852fb2a0"`)
        await db.query(`ALTER TABLE "burn_executed" DROP CONSTRAINT "FK_5f97fd9194eb22f723cbcc45cc6"`)
        await db.query(`ALTER TABLE "burn_withdrawal" DROP CONSTRAINT "FK_94e6b527afdcdc36cf3225bbed1"`)
        await db.query(`ALTER TABLE "cross_chain_commit_created" DROP CONSTRAINT "FK_28dc7a90b293d09395a7c23f333"`)
        await db.query(`ALTER TABLE "cross_chain_dispatch_completed" DROP CONSTRAINT "FK_c4902a1e2424144733bc46898fc"`)
        await db.query(`ALTER TABLE "liquidity_added" DROP CONSTRAINT "FK_066d02329a7a9eb674c77e25918"`)
        await db.query(`ALTER TABLE "liquidity_removed" DROP CONSTRAINT "FK_39ebfa87db993b4c24f65da4443"`)
        await db.query(`ALTER TABLE "market_conversion" DROP CONSTRAINT "FK_8cbca5e4f6c7ffaeab221aca8d0"`)
        await db.query(`ALTER TABLE "merchant_subscription_extended" DROP CONSTRAINT "FK_fecbe1491c3027973a007d7e8c8"`)
        await db.query(`ALTER TABLE "merchant_redeemed" DROP CONSTRAINT "FK_f2ddac68d6bb8ea3b15951b659d"`)
        await db.query(`ALTER TABLE "green_points_transaction" DROP CONSTRAINT "FK_a2385a2c8d56bfdec7ea8439b7a"`)
        await db.query(`ALTER TABLE "green_points_transaction" DROP CONSTRAINT "FK_7b3d25bbf2c66ec9967badb4580"`)
        await db.query(`ALTER TABLE "merchant_payment_sent" DROP CONSTRAINT "FK_8260de7d338ff54ae1eeaab2813"`)
        await db.query(`ALTER TABLE "merchant_payment_sent" DROP CONSTRAINT "FK_94d4df0286b9aa2c3f1fad30d80"`)
        await db.query(`ALTER TABLE "node_reward_paid" DROP CONSTRAINT "FK_df2e0f731cfe88eb5bc3747f6c5"`)
        await db.query(`ALTER TABLE "node_reward_paid" DROP CONSTRAINT "FK_632cc7269f2bd93d6bb3af734fb"`)
    }
}