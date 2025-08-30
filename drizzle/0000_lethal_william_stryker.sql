-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE "migrations" (
	"id" serial PRIMARY KEY NOT NULL,
	"timestamp" bigint NOT NULL,
	"name" varchar NOT NULL
);
--> statement-breakpoint
CREATE TABLE "transfer" (
	"id" varchar PRIMARY KEY NOT NULL,
	"block_number" integer NOT NULL,
	"block_hash" text NOT NULL,
	"timestamp" timestamp with time zone NOT NULL,
	"extrinsic_hash" text NOT NULL,
	"fee" numeric NOT NULL,
	"amount" numeric NOT NULL,
	"success" boolean NOT NULL,
	"token" varchar(4) NOT NULL,
	"from_id" varchar,
	"to_id" varchar
);
--> statement-breakpoint
CREATE TABLE "withdraw" (
	"id" varchar PRIMARY KEY NOT NULL,
	"block_number" integer NOT NULL,
	"block_hash" text NOT NULL,
	"timestamp" timestamp with time zone NOT NULL,
	"extrinsic_hash" text NOT NULL,
	"fee" numeric NOT NULL,
	"success" boolean NOT NULL,
	"amount" numeric NOT NULL,
	"who_id" varchar
);
--> statement-breakpoint
CREATE TABLE "node_vote" (
	"id" varchar PRIMARY KEY NOT NULL,
	"block_number" integer NOT NULL,
	"block_hash" text NOT NULL,
	"timestamp" timestamp with time zone NOT NULL,
	"extrinsic_hash" text NOT NULL,
	"fee" numeric NOT NULL,
	"success" boolean NOT NULL,
	"amount" numeric NOT NULL,
	"burn_contract" text NOT NULL,
	"main_pool" text NOT NULL,
	"beneficiary_voter_id" varchar
);
--> statement-breakpoint
CREATE TABLE "burn_executed" (
	"id" varchar PRIMARY KEY NOT NULL,
	"block_number" integer NOT NULL,
	"block_hash" text NOT NULL,
	"timestamp" timestamp with time zone NOT NULL,
	"extrinsic_hash" text NOT NULL,
	"fee" numeric NOT NULL,
	"success" boolean NOT NULL,
	"amount" numeric NOT NULL,
	"from_id" varchar
);
--> statement-breakpoint
CREATE TABLE "burn_withdrawal" (
	"id" varchar PRIMARY KEY NOT NULL,
	"block_number" integer NOT NULL,
	"block_hash" text NOT NULL,
	"timestamp" timestamp with time zone NOT NULL,
	"extrinsic_hash" text NOT NULL,
	"fee" numeric NOT NULL,
	"success" boolean NOT NULL,
	"amount" numeric NOT NULL,
	"from_id" varchar
);
--> statement-breakpoint
CREATE TABLE "cross_chain_commit_created" (
	"id" varchar PRIMARY KEY NOT NULL,
	"block_number" integer NOT NULL,
	"block_hash" text NOT NULL,
	"timestamp" timestamp with time zone NOT NULL,
	"extrinsic_hash" text NOT NULL,
	"fee" numeric NOT NULL,
	"success" boolean NOT NULL,
	"tx_id" text NOT NULL,
	"amount" numeric NOT NULL,
	"from_id" varchar
);
--> statement-breakpoint
CREATE TABLE "cross_chain_dispatch_completed" (
	"id" varchar PRIMARY KEY NOT NULL,
	"block_number" integer NOT NULL,
	"block_hash" text NOT NULL,
	"timestamp" timestamp with time zone NOT NULL,
	"extrinsic_hash" text NOT NULL,
	"fee" numeric NOT NULL,
	"success" boolean NOT NULL,
	"tx_id" text NOT NULL,
	"amount" numeric NOT NULL,
	"to_id" varchar
);
--> statement-breakpoint
CREATE TABLE "liquidity_added" (
	"id" varchar PRIMARY KEY NOT NULL,
	"block_number" integer NOT NULL,
	"block_hash" text NOT NULL,
	"timestamp" timestamp with time zone NOT NULL,
	"extrinsic_hash" text NOT NULL,
	"fee" numeric NOT NULL,
	"success" boolean NOT NULL,
	"d9" numeric NOT NULL,
	"usdt" numeric NOT NULL,
	"who_id" varchar
);
--> statement-breakpoint
CREATE TABLE "liquidity_removed" (
	"id" varchar PRIMARY KEY NOT NULL,
	"block_number" integer NOT NULL,
	"block_hash" text NOT NULL,
	"timestamp" timestamp with time zone NOT NULL,
	"extrinsic_hash" text NOT NULL,
	"fee" numeric NOT NULL,
	"success" boolean NOT NULL,
	"d9" numeric NOT NULL,
	"usdt" numeric NOT NULL,
	"who_id" varchar
);
--> statement-breakpoint
CREATE TABLE "market_conversion" (
	"id" varchar PRIMARY KEY NOT NULL,
	"block_number" integer NOT NULL,
	"block_hash" text NOT NULL,
	"timestamp" timestamp with time zone NOT NULL,
	"extrinsic_hash" text NOT NULL,
	"fee" numeric NOT NULL,
	"success" boolean NOT NULL,
	"from_token" varchar(4) NOT NULL,
	"to_token" varchar(4) NOT NULL,
	"lost" numeric NOT NULL,
	"got" numeric NOT NULL,
	"who_id" varchar
);
--> statement-breakpoint
CREATE TABLE "merchant_subscription_extended" (
	"id" varchar PRIMARY KEY NOT NULL,
	"block_number" integer NOT NULL,
	"block_hash" text NOT NULL,
	"timestamp" timestamp with time zone NOT NULL,
	"extrinsic_hash" text NOT NULL,
	"fee" numeric NOT NULL,
	"success" boolean NOT NULL,
	"expiry" timestamp with time zone NOT NULL,
	"amount" numeric NOT NULL,
	"payment_token" varchar(4) NOT NULL,
	"who_id" varchar
);
--> statement-breakpoint
CREATE TABLE "merchant_redeemed" (
	"id" varchar PRIMARY KEY NOT NULL,
	"block_number" integer NOT NULL,
	"block_hash" text NOT NULL,
	"timestamp" timestamp with time zone NOT NULL,
	"extrinsic_hash" text NOT NULL,
	"fee" numeric NOT NULL,
	"success" boolean NOT NULL,
	"token" varchar(4) NOT NULL,
	"amount" numeric NOT NULL,
	"who_id" varchar
);
--> statement-breakpoint
CREATE TABLE "green_points_transaction" (
	"id" varchar PRIMARY KEY NOT NULL,
	"block_number" integer NOT NULL,
	"block_hash" text NOT NULL,
	"timestamp" timestamp with time zone NOT NULL,
	"extrinsic_hash" text NOT NULL,
	"fee" numeric NOT NULL,
	"success" boolean NOT NULL,
	"merchant_gp" numeric NOT NULL,
	"consumer_gp" numeric NOT NULL,
	"merchant_id" varchar,
	"consumer_id" varchar
);
--> statement-breakpoint
CREATE TABLE "merchant_payment_sent" (
	"id" varchar PRIMARY KEY NOT NULL,
	"block_number" integer NOT NULL,
	"block_hash" text NOT NULL,
	"timestamp" timestamp with time zone NOT NULL,
	"extrinsic_hash" text NOT NULL,
	"fee" numeric NOT NULL,
	"success" boolean NOT NULL,
	"amount" numeric NOT NULL,
	"payment_token" varchar(4) NOT NULL,
	"merchant_id" varchar,
	"consumer_id" varchar
);
--> statement-breakpoint
CREATE TABLE "node_reward_paid" (
	"id" varchar PRIMARY KEY NOT NULL,
	"block_number" integer NOT NULL,
	"block_hash" text NOT NULL,
	"timestamp" timestamp with time zone NOT NULL,
	"extrinsic_hash" text NOT NULL,
	"fee" numeric NOT NULL,
	"success" boolean NOT NULL,
	"amount" numeric NOT NULL,
	"node_id" varchar,
	"receiver_id" varchar
);
--> statement-breakpoint
CREATE TABLE "block" (
	"id" varchar PRIMARY KEY NOT NULL,
	"number" integer NOT NULL,
	"timestamp" timestamp with time zone NOT NULL,
	"hash" text NOT NULL,
	"parent_hash" text NOT NULL,
	"state_root" text NOT NULL,
	"extrinsics_root" text NOT NULL,
	"spec_name" text NOT NULL,
	"spec_version" integer NOT NULL,
	"impl_name" text NOT NULL,
	"impl_version" integer NOT NULL,
	"validator_id" varchar
);
--> statement-breakpoint
CREATE TABLE "event" (
	"id" varchar PRIMARY KEY NOT NULL,
	"extrinsic_hash" text NOT NULL,
	"index" integer NOT NULL,
	"timestamp" timestamp with time zone NOT NULL,
	"module" text NOT NULL,
	"name" text NOT NULL,
	"attributes" jsonb NOT NULL,
	"success" boolean NOT NULL,
	"block_id" varchar,
	"extrinsic_id" varchar,
	"call_id" varchar
);
--> statement-breakpoint
CREATE TABLE "extrinsic" (
	"id" varchar PRIMARY KEY NOT NULL,
	"index" integer NOT NULL,
	"timestamp" timestamp with time zone NOT NULL,
	"hash" text,
	"module" text,
	"call" text,
	"success" boolean NOT NULL,
	"parameters" jsonb NOT NULL,
	"block_id" varchar,
	"signer_id" varchar
);
--> statement-breakpoint
CREATE TABLE "call" (
	"id" varchar PRIMARY KEY NOT NULL,
	"extrinsic_hash" text NOT NULL,
	"index" integer NOT NULL,
	"timestamp" timestamp with time zone NOT NULL,
	"method" text NOT NULL,
	"call" text NOT NULL,
	"parameters" jsonb NOT NULL,
	"success" boolean NOT NULL,
	"block_id" varchar,
	"extrinsic_id" varchar,
	"address_id" varchar
);
--> statement-breakpoint
CREATE TABLE "account" (
	"id" varchar PRIMARY KEY NOT NULL,
	"d9_balance" numeric,
	"usdt_balance" numeric,
	"green_points_balance" numeric,
	"mine_balance" numeric
);
--> statement-breakpoint
ALTER TABLE "transfer" ADD CONSTRAINT "FK_76bdfed1a7eb27c6d8ecbb73496" FOREIGN KEY ("from_id") REFERENCES "public"."account"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "transfer" ADD CONSTRAINT "FK_0751309c66e97eac9ef11493623" FOREIGN KEY ("to_id") REFERENCES "public"."account"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "withdraw" ADD CONSTRAINT "FK_aa40aea5349deafd36afb3009bd" FOREIGN KEY ("who_id") REFERENCES "public"."account"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "node_vote" ADD CONSTRAINT "FK_bc0da80f82334f63118852fb2a0" FOREIGN KEY ("beneficiary_voter_id") REFERENCES "public"."account"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "burn_executed" ADD CONSTRAINT "FK_5f97fd9194eb22f723cbcc45cc6" FOREIGN KEY ("from_id") REFERENCES "public"."account"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "burn_withdrawal" ADD CONSTRAINT "FK_94e6b527afdcdc36cf3225bbed1" FOREIGN KEY ("from_id") REFERENCES "public"."account"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "cross_chain_commit_created" ADD CONSTRAINT "FK_28dc7a90b293d09395a7c23f333" FOREIGN KEY ("from_id") REFERENCES "public"."account"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "cross_chain_dispatch_completed" ADD CONSTRAINT "FK_c4902a1e2424144733bc46898fc" FOREIGN KEY ("to_id") REFERENCES "public"."account"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "liquidity_added" ADD CONSTRAINT "FK_066d02329a7a9eb674c77e25918" FOREIGN KEY ("who_id") REFERENCES "public"."account"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "liquidity_removed" ADD CONSTRAINT "FK_39ebfa87db993b4c24f65da4443" FOREIGN KEY ("who_id") REFERENCES "public"."account"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "market_conversion" ADD CONSTRAINT "FK_8cbca5e4f6c7ffaeab221aca8d0" FOREIGN KEY ("who_id") REFERENCES "public"."account"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "merchant_subscription_extended" ADD CONSTRAINT "FK_fecbe1491c3027973a007d7e8c8" FOREIGN KEY ("who_id") REFERENCES "public"."account"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "merchant_redeemed" ADD CONSTRAINT "FK_f2ddac68d6bb8ea3b15951b659d" FOREIGN KEY ("who_id") REFERENCES "public"."account"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "green_points_transaction" ADD CONSTRAINT "FK_a2385a2c8d56bfdec7ea8439b7a" FOREIGN KEY ("merchant_id") REFERENCES "public"."account"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "green_points_transaction" ADD CONSTRAINT "FK_7b3d25bbf2c66ec9967badb4580" FOREIGN KEY ("consumer_id") REFERENCES "public"."account"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "merchant_payment_sent" ADD CONSTRAINT "FK_8260de7d338ff54ae1eeaab2813" FOREIGN KEY ("merchant_id") REFERENCES "public"."account"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "merchant_payment_sent" ADD CONSTRAINT "FK_94d4df0286b9aa2c3f1fad30d80" FOREIGN KEY ("consumer_id") REFERENCES "public"."account"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "node_reward_paid" ADD CONSTRAINT "FK_df2e0f731cfe88eb5bc3747f6c5" FOREIGN KEY ("node_id") REFERENCES "public"."account"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "node_reward_paid" ADD CONSTRAINT "FK_632cc7269f2bd93d6bb3af734fb" FOREIGN KEY ("receiver_id") REFERENCES "public"."account"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "block" ADD CONSTRAINT "FK_5e5476a5d105f43ab5bb2c3e779" FOREIGN KEY ("validator_id") REFERENCES "public"."account"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "event" ADD CONSTRAINT "FK_2b0d35d675c4f99751855c45021" FOREIGN KEY ("block_id") REFERENCES "public"."block"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "event" ADD CONSTRAINT "FK_129efedcb305c80256db2d57a59" FOREIGN KEY ("extrinsic_id") REFERENCES "public"."extrinsic"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "event" ADD CONSTRAINT "FK_83cf1bd59aa4521ed882fa51452" FOREIGN KEY ("call_id") REFERENCES "public"."call"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "extrinsic" ADD CONSTRAINT "FK_a3b99daba1259dab0dd040d4f74" FOREIGN KEY ("block_id") REFERENCES "public"."block"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "extrinsic" ADD CONSTRAINT "FK_886be421c92f221ac8234c6624c" FOREIGN KEY ("signer_id") REFERENCES "public"."account"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "call" ADD CONSTRAINT "FK_bd3f11fd4110d60ac8b96cd62f3" FOREIGN KEY ("block_id") REFERENCES "public"."block"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "call" ADD CONSTRAINT "FK_dde30e4f2c6a80f9236bfdf2590" FOREIGN KEY ("extrinsic_id") REFERENCES "public"."extrinsic"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "call" ADD CONSTRAINT "FK_9c3f8e7db62a8010e67e93a7f84" FOREIGN KEY ("address_id") REFERENCES "public"."account"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "IDX_070c555a86b0b41a534a55a659" ON "transfer" USING btree ("extrinsic_hash" text_ops);--> statement-breakpoint
CREATE INDEX "IDX_0751309c66e97eac9ef1149362" ON "transfer" USING btree ("to_id" text_ops);--> statement-breakpoint
CREATE INDEX "IDX_0774176de46f3a8828b06dbf5c" ON "transfer" USING btree ("block_hash" text_ops);--> statement-breakpoint
CREATE INDEX "IDX_66a60ee58d608783461be64c50" ON "transfer" USING btree ("token" text_ops);--> statement-breakpoint
CREATE INDEX "IDX_70ff8b624c3118ac3a4862d22c" ON "transfer" USING btree ("timestamp" timestamptz_ops);--> statement-breakpoint
CREATE INDEX "IDX_76bdfed1a7eb27c6d8ecbb7349" ON "transfer" USING btree ("from_id" text_ops);--> statement-breakpoint
CREATE INDEX "IDX_d6624eacc30144ea97915fe846" ON "transfer" USING btree ("block_number" int4_ops);--> statement-breakpoint
CREATE INDEX "IDX_f4007436c1b546ede08a4fd7ab" ON "transfer" USING btree ("amount" numeric_ops);--> statement-breakpoint
CREATE INDEX "IDX_0279c25f260fa70b391224082f" ON "withdraw" USING btree ("amount" numeric_ops);--> statement-breakpoint
CREATE INDEX "IDX_6bf791961dd76368fe56ed2b33" ON "withdraw" USING btree ("timestamp" timestamptz_ops);--> statement-breakpoint
CREATE INDEX "IDX_6e902f01cf874c46b9973a95ed" ON "withdraw" USING btree ("block_number" int4_ops);--> statement-breakpoint
CREATE INDEX "IDX_788314372bcba1b3a63698f03e" ON "withdraw" USING btree ("block_hash" text_ops);--> statement-breakpoint
CREATE INDEX "IDX_aa40aea5349deafd36afb3009b" ON "withdraw" USING btree ("who_id" text_ops);--> statement-breakpoint
CREATE INDEX "IDX_de38a0e1732a8cd1c51def6597" ON "withdraw" USING btree ("extrinsic_hash" text_ops);--> statement-breakpoint
CREATE INDEX "IDX_19117e8987ee1a74a4b03f3cfc" ON "node_vote" USING btree ("extrinsic_hash" text_ops);--> statement-breakpoint
CREATE INDEX "IDX_2ed4039617ff179dc24fd4b72e" ON "node_vote" USING btree ("block_hash" text_ops);--> statement-breakpoint
CREATE INDEX "IDX_2ee85c5f1c2ba3c77b1583f033" ON "node_vote" USING btree ("block_number" int4_ops);--> statement-breakpoint
CREATE INDEX "IDX_a108b4d346deeccb79c58dafd9" ON "node_vote" USING btree ("timestamp" timestamptz_ops);--> statement-breakpoint
CREATE INDEX "IDX_bc0da80f82334f63118852fb2a" ON "node_vote" USING btree ("beneficiary_voter_id" text_ops);--> statement-breakpoint
CREATE INDEX "IDX_1dd813665adef8278106bb7680" ON "burn_executed" USING btree ("amount" numeric_ops);--> statement-breakpoint
CREATE INDEX "IDX_3b11053856963a744f40c83c5f" ON "burn_executed" USING btree ("block_hash" text_ops);--> statement-breakpoint
CREATE INDEX "IDX_5f97fd9194eb22f723cbcc45cc" ON "burn_executed" USING btree ("from_id" text_ops);--> statement-breakpoint
CREATE INDEX "IDX_b53f0cfdc80c7f70b8d14e8ac9" ON "burn_executed" USING btree ("extrinsic_hash" text_ops);--> statement-breakpoint
CREATE INDEX "IDX_f70d8457751cf5a78cf53b8aa2" ON "burn_executed" USING btree ("block_number" int4_ops);--> statement-breakpoint
CREATE INDEX "IDX_fc1d9d5498864a00488971e851" ON "burn_executed" USING btree ("timestamp" timestamptz_ops);--> statement-breakpoint
CREATE INDEX "IDX_1bdcc40077d12f1fe46e3a0af2" ON "burn_withdrawal" USING btree ("extrinsic_hash" text_ops);--> statement-breakpoint
CREATE INDEX "IDX_5ea9444710424e7f39f8e2997d" ON "burn_withdrawal" USING btree ("block_number" int4_ops);--> statement-breakpoint
CREATE INDEX "IDX_8cd5fef1c2c203738e62a6f98b" ON "burn_withdrawal" USING btree ("amount" numeric_ops);--> statement-breakpoint
CREATE INDEX "IDX_94e6b527afdcdc36cf3225bbed" ON "burn_withdrawal" USING btree ("from_id" text_ops);--> statement-breakpoint
CREATE INDEX "IDX_a5ec66399f0026646f6813f3b5" ON "burn_withdrawal" USING btree ("block_hash" text_ops);--> statement-breakpoint
CREATE INDEX "IDX_f1e84ec64c4df958949b3cb336" ON "burn_withdrawal" USING btree ("timestamp" timestamptz_ops);--> statement-breakpoint
CREATE INDEX "IDX_28dc7a90b293d09395a7c23f33" ON "cross_chain_commit_created" USING btree ("from_id" text_ops);--> statement-breakpoint
CREATE INDEX "IDX_72ea4d31ef1435d6b9f98d0ee9" ON "cross_chain_commit_created" USING btree ("block_hash" text_ops);--> statement-breakpoint
CREATE INDEX "IDX_793a4f8d168b816a445a559e5c" ON "cross_chain_commit_created" USING btree ("block_number" int4_ops);--> statement-breakpoint
CREATE INDEX "IDX_910843f96e39e2a6fd4c147414" ON "cross_chain_commit_created" USING btree ("tx_id" text_ops);--> statement-breakpoint
CREATE INDEX "IDX_ae97e39932a7b8aadc11d37829" ON "cross_chain_commit_created" USING btree ("amount" numeric_ops);--> statement-breakpoint
CREATE INDEX "IDX_d533db00791afc91b2ed76e205" ON "cross_chain_commit_created" USING btree ("extrinsic_hash" text_ops);--> statement-breakpoint
CREATE INDEX "IDX_ee8fa62090924a7c2dbf1af7a1" ON "cross_chain_commit_created" USING btree ("timestamp" timestamptz_ops);--> statement-breakpoint
CREATE INDEX "IDX_1a06f976127f923bae1151bff0" ON "cross_chain_dispatch_completed" USING btree ("timestamp" timestamptz_ops);--> statement-breakpoint
CREATE INDEX "IDX_68b95e23c2f2026c31b4330a21" ON "cross_chain_dispatch_completed" USING btree ("block_number" int4_ops);--> statement-breakpoint
CREATE INDEX "IDX_891eec536d70f9539242290ad1" ON "cross_chain_dispatch_completed" USING btree ("extrinsic_hash" text_ops);--> statement-breakpoint
CREATE INDEX "IDX_af40bf64adcc77f9239d002f24" ON "cross_chain_dispatch_completed" USING btree ("tx_id" text_ops);--> statement-breakpoint
CREATE INDEX "IDX_c4902a1e2424144733bc46898f" ON "cross_chain_dispatch_completed" USING btree ("to_id" text_ops);--> statement-breakpoint
CREATE INDEX "IDX_e1dd3cb8870e7a6d003d35a0fb" ON "cross_chain_dispatch_completed" USING btree ("amount" numeric_ops);--> statement-breakpoint
CREATE INDEX "IDX_e9deb11e98272d1f247893f336" ON "cross_chain_dispatch_completed" USING btree ("block_hash" text_ops);--> statement-breakpoint
CREATE INDEX "IDX_066d02329a7a9eb674c77e2591" ON "liquidity_added" USING btree ("who_id" text_ops);--> statement-breakpoint
CREATE INDEX "IDX_6669af7563a0ed0304e90700b2" ON "liquidity_added" USING btree ("extrinsic_hash" text_ops);--> statement-breakpoint
CREATE INDEX "IDX_7240d5ff3c2eb10f3c407077dc" ON "liquidity_added" USING btree ("block_hash" text_ops);--> statement-breakpoint
CREATE INDEX "IDX_e8c426ab783e95aa3f424e64bb" ON "liquidity_added" USING btree ("block_number" int4_ops);--> statement-breakpoint
CREATE INDEX "IDX_fa2e53c8c14f1205a4d8b4effa" ON "liquidity_added" USING btree ("timestamp" timestamptz_ops);--> statement-breakpoint
CREATE INDEX "IDX_39ebfa87db993b4c24f65da444" ON "liquidity_removed" USING btree ("who_id" text_ops);--> statement-breakpoint
CREATE INDEX "IDX_46419282416ce0179e259b0297" ON "liquidity_removed" USING btree ("timestamp" timestamptz_ops);--> statement-breakpoint
CREATE INDEX "IDX_7ca1c5739e1bf3640dee812e7f" ON "liquidity_removed" USING btree ("block_number" int4_ops);--> statement-breakpoint
CREATE INDEX "IDX_83450ba25deee4b94e4953f54d" ON "liquidity_removed" USING btree ("block_hash" text_ops);--> statement-breakpoint
CREATE INDEX "IDX_960b4c6ebd6b256415dd969c54" ON "liquidity_removed" USING btree ("extrinsic_hash" text_ops);--> statement-breakpoint
CREATE INDEX "IDX_7e26889b4fbae21143f5efd5b2" ON "market_conversion" USING btree ("block_number" int4_ops);--> statement-breakpoint
CREATE INDEX "IDX_8cbca5e4f6c7ffaeab221aca8d" ON "market_conversion" USING btree ("who_id" text_ops);--> statement-breakpoint
CREATE INDEX "IDX_9042cb62a0798abdc4e35887da" ON "market_conversion" USING btree ("timestamp" timestamptz_ops);--> statement-breakpoint
CREATE INDEX "IDX_e068a0b11fa3b254ae4865237d" ON "market_conversion" USING btree ("block_hash" text_ops);--> statement-breakpoint
CREATE INDEX "IDX_e58bd150577b98a483bb0e98a6" ON "market_conversion" USING btree ("extrinsic_hash" text_ops);--> statement-breakpoint
CREATE INDEX "IDX_0ba7185dc3f21dff2d894a8520" ON "merchant_subscription_extended" USING btree ("block_hash" text_ops);--> statement-breakpoint
CREATE INDEX "IDX_498533fbf382d696b26767abc9" ON "merchant_subscription_extended" USING btree ("block_number" int4_ops);--> statement-breakpoint
CREATE INDEX "IDX_d7c1ea3458eb081e4e3d0109a4" ON "merchant_subscription_extended" USING btree ("timestamp" timestamptz_ops);--> statement-breakpoint
CREATE INDEX "IDX_efb5a8faa6ef32aacdb728e1cb" ON "merchant_subscription_extended" USING btree ("extrinsic_hash" text_ops);--> statement-breakpoint
CREATE INDEX "IDX_fecbe1491c3027973a007d7e8c" ON "merchant_subscription_extended" USING btree ("who_id" text_ops);--> statement-breakpoint
CREATE INDEX "IDX_09a3b52dc58d8f9bca804dc99c" ON "merchant_redeemed" USING btree ("block_hash" text_ops);--> statement-breakpoint
CREATE INDEX "IDX_376073cc34baa9dc56b05ab682" ON "merchant_redeemed" USING btree ("timestamp" timestamptz_ops);--> statement-breakpoint
CREATE INDEX "IDX_8ec23a64252efb4aaf46d2be4e" ON "merchant_redeemed" USING btree ("extrinsic_hash" text_ops);--> statement-breakpoint
CREATE INDEX "IDX_b64382043c672cf167c36915c7" ON "merchant_redeemed" USING btree ("block_number" int4_ops);--> statement-breakpoint
CREATE INDEX "IDX_f2ddac68d6bb8ea3b15951b659" ON "merchant_redeemed" USING btree ("who_id" text_ops);--> statement-breakpoint
CREATE INDEX "IDX_3ccf1b62ca9e0be880ff213e01" ON "green_points_transaction" USING btree ("block_number" int4_ops);--> statement-breakpoint
CREATE INDEX "IDX_6e5ecd161c77ed60d939656d0b" ON "green_points_transaction" USING btree ("timestamp" timestamptz_ops);--> statement-breakpoint
CREATE INDEX "IDX_7b3d25bbf2c66ec9967badb458" ON "green_points_transaction" USING btree ("consumer_id" text_ops);--> statement-breakpoint
CREATE INDEX "IDX_a2385a2c8d56bfdec7ea8439b7" ON "green_points_transaction" USING btree ("merchant_id" text_ops);--> statement-breakpoint
CREATE INDEX "IDX_cb1f4346ea375f8138e96c8a5d" ON "green_points_transaction" USING btree ("extrinsic_hash" text_ops);--> statement-breakpoint
CREATE INDEX "IDX_cc3646c3cf40679c421911dac8" ON "green_points_transaction" USING btree ("block_hash" text_ops);--> statement-breakpoint
CREATE INDEX "IDX_2e3a8eefe93712eac8d62aa325" ON "merchant_payment_sent" USING btree ("block_hash" text_ops);--> statement-breakpoint
CREATE INDEX "IDX_76948cada2a2956a080d20e33c" ON "merchant_payment_sent" USING btree ("timestamp" timestamptz_ops);--> statement-breakpoint
CREATE INDEX "IDX_8260de7d338ff54ae1eeaab281" ON "merchant_payment_sent" USING btree ("merchant_id" text_ops);--> statement-breakpoint
CREATE INDEX "IDX_8a7da6bd438ef7d338a1d9ef24" ON "merchant_payment_sent" USING btree ("block_number" int4_ops);--> statement-breakpoint
CREATE INDEX "IDX_94d4df0286b9aa2c3f1fad30d8" ON "merchant_payment_sent" USING btree ("consumer_id" text_ops);--> statement-breakpoint
CREATE INDEX "IDX_d56cb1bbf84d8be8eecce28891" ON "merchant_payment_sent" USING btree ("extrinsic_hash" text_ops);--> statement-breakpoint
CREATE INDEX "IDX_42b939f852084380307cc62022" ON "node_reward_paid" USING btree ("block_number" int4_ops);--> statement-breakpoint
CREATE INDEX "IDX_632cc7269f2bd93d6bb3af734f" ON "node_reward_paid" USING btree ("receiver_id" text_ops);--> statement-breakpoint
CREATE INDEX "IDX_65b06323ae4e200ba86b0a6564" ON "node_reward_paid" USING btree ("block_hash" text_ops);--> statement-breakpoint
CREATE INDEX "IDX_b3d0968d8108ee4fd728096f57" ON "node_reward_paid" USING btree ("timestamp" timestamptz_ops);--> statement-breakpoint
CREATE INDEX "IDX_bb9eceaa0cdb03ee56e6386da3" ON "node_reward_paid" USING btree ("extrinsic_hash" text_ops);--> statement-breakpoint
CREATE INDEX "IDX_df2e0f731cfe88eb5bc3747f6c" ON "node_reward_paid" USING btree ("node_id" text_ops);--> statement-breakpoint
CREATE INDEX "IDX_0fe91a38b9077fa6649440b535" ON "block" USING btree ("extrinsics_root" text_ops);--> statement-breakpoint
CREATE INDEX "IDX_38414873c187a3e0c7943bc4c7" ON "block" USING btree ("number" int4_ops);--> statement-breakpoint
CREATE INDEX "IDX_5c67cbcf4960c1a39e5fe25e87" ON "block" USING btree ("timestamp" timestamptz_ops);--> statement-breakpoint
CREATE INDEX "IDX_5e5476a5d105f43ab5bb2c3e77" ON "block" USING btree ("validator_id" text_ops);--> statement-breakpoint
CREATE INDEX "IDX_cb4ef42b2c566c2a8045aa97b6" ON "block" USING btree ("parent_hash" text_ops);--> statement-breakpoint
CREATE INDEX "IDX_f8fba63d7965bfee9f304c487a" ON "block" USING btree ("hash" text_ops);--> statement-breakpoint
CREATE INDEX "IDX_ff40b28f2cba8ee97c50aa2c52" ON "block" USING btree ("state_root" text_ops);--> statement-breakpoint
CREATE INDEX "IDX_129efedcb305c80256db2d57a5" ON "event" USING btree ("extrinsic_id" text_ops);--> statement-breakpoint
CREATE INDEX "IDX_2b0d35d675c4f99751855c4502" ON "event" USING btree ("block_id" text_ops);--> statement-breakpoint
CREATE INDEX "IDX_2c15918ff289396205521c5f3c" ON "event" USING btree ("timestamp" timestamptz_ops);--> statement-breakpoint
CREATE INDEX "IDX_5849a08a8bedd645c758b85d26" ON "event" USING btree ("extrinsic_hash" text_ops);--> statement-breakpoint
CREATE INDEX "IDX_83cf1bd59aa4521ed882fa5145" ON "event" USING btree ("call_id" text_ops);--> statement-breakpoint
CREATE INDEX "IDX_b535fbe8ec6d832dde22065ebd" ON "event" USING btree ("name" text_ops);--> statement-breakpoint
CREATE INDEX "IDX_cc4a03697c24814df8d7ebc501" ON "event" USING btree ("module" text_ops);--> statement-breakpoint
CREATE INDEX "IDX_da3f402a04a5bf731cc20997a4" ON "event" USING btree ("index" int4_ops);--> statement-breakpoint
CREATE INDEX "IDX_1f45de0713a55049009e8e8127" ON "extrinsic" USING btree ("hash" text_ops);--> statement-breakpoint
CREATE INDEX "IDX_42ab437e6d4f76354a0a15a6c9" ON "extrinsic" USING btree ("call" text_ops);--> statement-breakpoint
CREATE INDEX "IDX_4eb783f0139bdc1634e3b16041" ON "extrinsic" USING btree ("module" text_ops);--> statement-breakpoint
CREATE INDEX "IDX_6e232918078798b1fade21dcf8" ON "extrinsic" USING btree ("timestamp" timestamptz_ops);--> statement-breakpoint
CREATE INDEX "IDX_886be421c92f221ac8234c6624" ON "extrinsic" USING btree ("signer_id" text_ops);--> statement-breakpoint
CREATE INDEX "IDX_91b0c68a28f1eed15d736d7e11" ON "extrinsic" USING btree ("index" int4_ops);--> statement-breakpoint
CREATE INDEX "IDX_a3b99daba1259dab0dd040d4f7" ON "extrinsic" USING btree ("block_id" text_ops);--> statement-breakpoint
CREATE INDEX "IDX_1295671fc13e1d7c243c897104" ON "call" USING btree ("call" text_ops);--> statement-breakpoint
CREATE INDEX "IDX_638ba9d3d6a8224e66d404d784" ON "call" USING btree ("extrinsic_hash" text_ops);--> statement-breakpoint
CREATE INDEX "IDX_6f635f2379199699013477fde9" ON "call" USING btree ("method" text_ops);--> statement-breakpoint
CREATE INDEX "IDX_9c3f8e7db62a8010e67e93a7f8" ON "call" USING btree ("address_id" text_ops);--> statement-breakpoint
CREATE INDEX "IDX_a032945f45cacda2d30f4286df" ON "call" USING btree ("timestamp" timestamptz_ops);--> statement-breakpoint
CREATE INDEX "IDX_bd3f11fd4110d60ac8b96cd62f" ON "call" USING btree ("block_id" text_ops);--> statement-breakpoint
CREATE INDEX "IDX_d503ba978fd183484a1e20dce1" ON "call" USING btree ("index" int4_ops);--> statement-breakpoint
CREATE INDEX "IDX_dde30e4f2c6a80f9236bfdf259" ON "call" USING btree ("extrinsic_id" text_ops);--> statement-breakpoint
CREATE INDEX "IDX_97ca34b44513640f642da1b790" ON "account" USING btree ("usdt_balance" numeric_ops);--> statement-breakpoint
CREATE INDEX "IDX_9fd14b77ca20fc8a67b8a37b32" ON "account" USING btree ("green_points_balance" numeric_ops);--> statement-breakpoint
CREATE INDEX "IDX_a1794e1af1c3b16c76f7c216b3" ON "account" USING btree ("d9_balance" numeric_ops);--> statement-breakpoint
CREATE INDEX "IDX_b092df7b8388e50aaba0686a5b" ON "account" USING btree ("mine_balance" numeric_ops);
*/