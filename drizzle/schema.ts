import { pgTable, serial, bigint, varchar, index, foreignKey, integer, text, timestamp, numeric, boolean, jsonb } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"



export const migrations = pgTable("migrations", {
	id: serial().primaryKey().notNull(),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	timestamp: bigint({ mode: "number" }).notNull(),
	name: varchar().notNull(),
});

export const transfer = pgTable("transfer", {
	id: varchar().primaryKey().notNull(),
	blockNumber: integer("block_number").notNull(),
	blockHash: text("block_hash").notNull(),
	timestamp: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	extrinsicHash: text("extrinsic_hash").notNull(),
	fee: numeric().notNull(),
	amount: numeric().notNull(),
	success: boolean().notNull(),
	token: varchar({ length: 4 }).notNull(),
	fromId: varchar("from_id"),
	toId: varchar("to_id"),
}, (table) => [
	index("IDX_070c555a86b0b41a534a55a659").using("btree", table.extrinsicHash.asc().nullsLast().op("text_ops")),
	index("IDX_0751309c66e97eac9ef1149362").using("btree", table.toId.asc().nullsLast().op("text_ops")),
	index("IDX_0774176de46f3a8828b06dbf5c").using("btree", table.blockHash.asc().nullsLast().op("text_ops")),
	index("IDX_66a60ee58d608783461be64c50").using("btree", table.token.asc().nullsLast().op("text_ops")),
	index("IDX_70ff8b624c3118ac3a4862d22c").using("btree", table.timestamp.asc().nullsLast().op("timestamptz_ops")),
	index("IDX_76bdfed1a7eb27c6d8ecbb7349").using("btree", table.fromId.asc().nullsLast().op("text_ops")),
	index("IDX_d6624eacc30144ea97915fe846").using("btree", table.blockNumber.asc().nullsLast().op("int4_ops")),
	index("IDX_f4007436c1b546ede08a4fd7ab").using("btree", table.amount.asc().nullsLast().op("numeric_ops")),
	foreignKey({
			columns: [table.fromId],
			foreignColumns: [account.id],
			name: "FK_76bdfed1a7eb27c6d8ecbb73496"
		}),
	foreignKey({
			columns: [table.toId],
			foreignColumns: [account.id],
			name: "FK_0751309c66e97eac9ef11493623"
		}),
]);

export const withdraw = pgTable("withdraw", {
	id: varchar().primaryKey().notNull(),
	blockNumber: integer("block_number").notNull(),
	blockHash: text("block_hash").notNull(),
	timestamp: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	extrinsicHash: text("extrinsic_hash").notNull(),
	fee: numeric().notNull(),
	success: boolean().notNull(),
	amount: numeric().notNull(),
	whoId: varchar("who_id"),
}, (table) => [
	index("IDX_0279c25f260fa70b391224082f").using("btree", table.amount.asc().nullsLast().op("numeric_ops")),
	index("IDX_6bf791961dd76368fe56ed2b33").using("btree", table.timestamp.asc().nullsLast().op("timestamptz_ops")),
	index("IDX_6e902f01cf874c46b9973a95ed").using("btree", table.blockNumber.asc().nullsLast().op("int4_ops")),
	index("IDX_788314372bcba1b3a63698f03e").using("btree", table.blockHash.asc().nullsLast().op("text_ops")),
	index("IDX_aa40aea5349deafd36afb3009b").using("btree", table.whoId.asc().nullsLast().op("text_ops")),
	index("IDX_de38a0e1732a8cd1c51def6597").using("btree", table.extrinsicHash.asc().nullsLast().op("text_ops")),
	foreignKey({
			columns: [table.whoId],
			foreignColumns: [account.id],
			name: "FK_aa40aea5349deafd36afb3009bd"
		}),
]);

export const nodeVote = pgTable("node_vote", {
	id: varchar().primaryKey().notNull(),
	blockNumber: integer("block_number").notNull(),
	blockHash: text("block_hash").notNull(),
	timestamp: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	extrinsicHash: text("extrinsic_hash").notNull(),
	fee: numeric().notNull(),
	success: boolean().notNull(),
	amount: numeric().notNull(),
	burnContract: text("burn_contract").notNull(),
	mainPool: text("main_pool").notNull(),
	beneficiaryVoterId: varchar("beneficiary_voter_id"),
}, (table) => [
	index("IDX_19117e8987ee1a74a4b03f3cfc").using("btree", table.extrinsicHash.asc().nullsLast().op("text_ops")),
	index("IDX_2ed4039617ff179dc24fd4b72e").using("btree", table.blockHash.asc().nullsLast().op("text_ops")),
	index("IDX_2ee85c5f1c2ba3c77b1583f033").using("btree", table.blockNumber.asc().nullsLast().op("int4_ops")),
	index("IDX_a108b4d346deeccb79c58dafd9").using("btree", table.timestamp.asc().nullsLast().op("timestamptz_ops")),
	index("IDX_bc0da80f82334f63118852fb2a").using("btree", table.beneficiaryVoterId.asc().nullsLast().op("text_ops")),
	foreignKey({
			columns: [table.beneficiaryVoterId],
			foreignColumns: [account.id],
			name: "FK_bc0da80f82334f63118852fb2a0"
		}),
]);

export const burnExecuted = pgTable("burn_executed", {
	id: varchar().primaryKey().notNull(),
	blockNumber: integer("block_number").notNull(),
	blockHash: text("block_hash").notNull(),
	timestamp: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	extrinsicHash: text("extrinsic_hash").notNull(),
	fee: numeric().notNull(),
	success: boolean().notNull(),
	amount: numeric().notNull(),
	fromId: varchar("from_id"),
}, (table) => [
	index("IDX_1dd813665adef8278106bb7680").using("btree", table.amount.asc().nullsLast().op("numeric_ops")),
	index("IDX_3b11053856963a744f40c83c5f").using("btree", table.blockHash.asc().nullsLast().op("text_ops")),
	index("IDX_5f97fd9194eb22f723cbcc45cc").using("btree", table.fromId.asc().nullsLast().op("text_ops")),
	index("IDX_b53f0cfdc80c7f70b8d14e8ac9").using("btree", table.extrinsicHash.asc().nullsLast().op("text_ops")),
	index("IDX_f70d8457751cf5a78cf53b8aa2").using("btree", table.blockNumber.asc().nullsLast().op("int4_ops")),
	index("IDX_fc1d9d5498864a00488971e851").using("btree", table.timestamp.asc().nullsLast().op("timestamptz_ops")),
	foreignKey({
			columns: [table.fromId],
			foreignColumns: [account.id],
			name: "FK_5f97fd9194eb22f723cbcc45cc6"
		}),
]);

export const burnWithdrawal = pgTable("burn_withdrawal", {
	id: varchar().primaryKey().notNull(),
	blockNumber: integer("block_number").notNull(),
	blockHash: text("block_hash").notNull(),
	timestamp: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	extrinsicHash: text("extrinsic_hash").notNull(),
	fee: numeric().notNull(),
	success: boolean().notNull(),
	amount: numeric().notNull(),
	fromId: varchar("from_id"),
}, (table) => [
	index("IDX_1bdcc40077d12f1fe46e3a0af2").using("btree", table.extrinsicHash.asc().nullsLast().op("text_ops")),
	index("IDX_5ea9444710424e7f39f8e2997d").using("btree", table.blockNumber.asc().nullsLast().op("int4_ops")),
	index("IDX_8cd5fef1c2c203738e62a6f98b").using("btree", table.amount.asc().nullsLast().op("numeric_ops")),
	index("IDX_94e6b527afdcdc36cf3225bbed").using("btree", table.fromId.asc().nullsLast().op("text_ops")),
	index("IDX_a5ec66399f0026646f6813f3b5").using("btree", table.blockHash.asc().nullsLast().op("text_ops")),
	index("IDX_f1e84ec64c4df958949b3cb336").using("btree", table.timestamp.asc().nullsLast().op("timestamptz_ops")),
	foreignKey({
			columns: [table.fromId],
			foreignColumns: [account.id],
			name: "FK_94e6b527afdcdc36cf3225bbed1"
		}),
]);

export const crossChainCommitCreated = pgTable("cross_chain_commit_created", {
	id: varchar().primaryKey().notNull(),
	blockNumber: integer("block_number").notNull(),
	blockHash: text("block_hash").notNull(),
	timestamp: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	extrinsicHash: text("extrinsic_hash").notNull(),
	fee: numeric().notNull(),
	success: boolean().notNull(),
	txId: text("tx_id").notNull(),
	amount: numeric().notNull(),
	fromId: varchar("from_id"),
}, (table) => [
	index("IDX_28dc7a90b293d09395a7c23f33").using("btree", table.fromId.asc().nullsLast().op("text_ops")),
	index("IDX_72ea4d31ef1435d6b9f98d0ee9").using("btree", table.blockHash.asc().nullsLast().op("text_ops")),
	index("IDX_793a4f8d168b816a445a559e5c").using("btree", table.blockNumber.asc().nullsLast().op("int4_ops")),
	index("IDX_910843f96e39e2a6fd4c147414").using("btree", table.txId.asc().nullsLast().op("text_ops")),
	index("IDX_ae97e39932a7b8aadc11d37829").using("btree", table.amount.asc().nullsLast().op("numeric_ops")),
	index("IDX_d533db00791afc91b2ed76e205").using("btree", table.extrinsicHash.asc().nullsLast().op("text_ops")),
	index("IDX_ee8fa62090924a7c2dbf1af7a1").using("btree", table.timestamp.asc().nullsLast().op("timestamptz_ops")),
	foreignKey({
			columns: [table.fromId],
			foreignColumns: [account.id],
			name: "FK_28dc7a90b293d09395a7c23f333"
		}),
]);

export const crossChainDispatchCompleted = pgTable("cross_chain_dispatch_completed", {
	id: varchar().primaryKey().notNull(),
	blockNumber: integer("block_number").notNull(),
	blockHash: text("block_hash").notNull(),
	timestamp: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	extrinsicHash: text("extrinsic_hash").notNull(),
	fee: numeric().notNull(),
	success: boolean().notNull(),
	txId: text("tx_id").notNull(),
	amount: numeric().notNull(),
	toId: varchar("to_id"),
}, (table) => [
	index("IDX_1a06f976127f923bae1151bff0").using("btree", table.timestamp.asc().nullsLast().op("timestamptz_ops")),
	index("IDX_68b95e23c2f2026c31b4330a21").using("btree", table.blockNumber.asc().nullsLast().op("int4_ops")),
	index("IDX_891eec536d70f9539242290ad1").using("btree", table.extrinsicHash.asc().nullsLast().op("text_ops")),
	index("IDX_af40bf64adcc77f9239d002f24").using("btree", table.txId.asc().nullsLast().op("text_ops")),
	index("IDX_c4902a1e2424144733bc46898f").using("btree", table.toId.asc().nullsLast().op("text_ops")),
	index("IDX_e1dd3cb8870e7a6d003d35a0fb").using("btree", table.amount.asc().nullsLast().op("numeric_ops")),
	index("IDX_e9deb11e98272d1f247893f336").using("btree", table.blockHash.asc().nullsLast().op("text_ops")),
	foreignKey({
			columns: [table.toId],
			foreignColumns: [account.id],
			name: "FK_c4902a1e2424144733bc46898fc"
		}),
]);

export const liquidityAdded = pgTable("liquidity_added", {
	id: varchar().primaryKey().notNull(),
	blockNumber: integer("block_number").notNull(),
	blockHash: text("block_hash").notNull(),
	timestamp: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	extrinsicHash: text("extrinsic_hash").notNull(),
	fee: numeric().notNull(),
	success: boolean().notNull(),
	d9: numeric().notNull(),
	usdt: numeric().notNull(),
	whoId: varchar("who_id"),
}, (table) => [
	index("IDX_066d02329a7a9eb674c77e2591").using("btree", table.whoId.asc().nullsLast().op("text_ops")),
	index("IDX_6669af7563a0ed0304e90700b2").using("btree", table.extrinsicHash.asc().nullsLast().op("text_ops")),
	index("IDX_7240d5ff3c2eb10f3c407077dc").using("btree", table.blockHash.asc().nullsLast().op("text_ops")),
	index("IDX_e8c426ab783e95aa3f424e64bb").using("btree", table.blockNumber.asc().nullsLast().op("int4_ops")),
	index("IDX_fa2e53c8c14f1205a4d8b4effa").using("btree", table.timestamp.asc().nullsLast().op("timestamptz_ops")),
	foreignKey({
			columns: [table.whoId],
			foreignColumns: [account.id],
			name: "FK_066d02329a7a9eb674c77e25918"
		}),
]);

export const liquidityRemoved = pgTable("liquidity_removed", {
	id: varchar().primaryKey().notNull(),
	blockNumber: integer("block_number").notNull(),
	blockHash: text("block_hash").notNull(),
	timestamp: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	extrinsicHash: text("extrinsic_hash").notNull(),
	fee: numeric().notNull(),
	success: boolean().notNull(),
	d9: numeric().notNull(),
	usdt: numeric().notNull(),
	whoId: varchar("who_id"),
}, (table) => [
	index("IDX_39ebfa87db993b4c24f65da444").using("btree", table.whoId.asc().nullsLast().op("text_ops")),
	index("IDX_46419282416ce0179e259b0297").using("btree", table.timestamp.asc().nullsLast().op("timestamptz_ops")),
	index("IDX_7ca1c5739e1bf3640dee812e7f").using("btree", table.blockNumber.asc().nullsLast().op("int4_ops")),
	index("IDX_83450ba25deee4b94e4953f54d").using("btree", table.blockHash.asc().nullsLast().op("text_ops")),
	index("IDX_960b4c6ebd6b256415dd969c54").using("btree", table.extrinsicHash.asc().nullsLast().op("text_ops")),
	foreignKey({
			columns: [table.whoId],
			foreignColumns: [account.id],
			name: "FK_39ebfa87db993b4c24f65da4443"
		}),
]);

export const marketConversion = pgTable("market_conversion", {
	id: varchar().primaryKey().notNull(),
	blockNumber: integer("block_number").notNull(),
	blockHash: text("block_hash").notNull(),
	timestamp: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	extrinsicHash: text("extrinsic_hash").notNull(),
	fee: numeric().notNull(),
	success: boolean().notNull(),
	fromToken: varchar("from_token", { length: 4 }).notNull(),
	toToken: varchar("to_token", { length: 4 }).notNull(),
	lost: numeric().notNull(),
	got: numeric().notNull(),
	whoId: varchar("who_id"),
}, (table) => [
	index("IDX_7e26889b4fbae21143f5efd5b2").using("btree", table.blockNumber.asc().nullsLast().op("int4_ops")),
	index("IDX_8cbca5e4f6c7ffaeab221aca8d").using("btree", table.whoId.asc().nullsLast().op("text_ops")),
	index("IDX_9042cb62a0798abdc4e35887da").using("btree", table.timestamp.asc().nullsLast().op("timestamptz_ops")),
	index("IDX_e068a0b11fa3b254ae4865237d").using("btree", table.blockHash.asc().nullsLast().op("text_ops")),
	index("IDX_e58bd150577b98a483bb0e98a6").using("btree", table.extrinsicHash.asc().nullsLast().op("text_ops")),
	foreignKey({
			columns: [table.whoId],
			foreignColumns: [account.id],
			name: "FK_8cbca5e4f6c7ffaeab221aca8d0"
		}),
]);

export const merchantSubscriptionExtended = pgTable("merchant_subscription_extended", {
	id: varchar().primaryKey().notNull(),
	blockNumber: integer("block_number").notNull(),
	blockHash: text("block_hash").notNull(),
	timestamp: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	extrinsicHash: text("extrinsic_hash").notNull(),
	fee: numeric().notNull(),
	success: boolean().notNull(),
	expiry: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	amount: numeric().notNull(),
	paymentToken: varchar("payment_token", { length: 4 }).notNull(),
	whoId: varchar("who_id"),
}, (table) => [
	index("IDX_0ba7185dc3f21dff2d894a8520").using("btree", table.blockHash.asc().nullsLast().op("text_ops")),
	index("IDX_498533fbf382d696b26767abc9").using("btree", table.blockNumber.asc().nullsLast().op("int4_ops")),
	index("IDX_d7c1ea3458eb081e4e3d0109a4").using("btree", table.timestamp.asc().nullsLast().op("timestamptz_ops")),
	index("IDX_efb5a8faa6ef32aacdb728e1cb").using("btree", table.extrinsicHash.asc().nullsLast().op("text_ops")),
	index("IDX_fecbe1491c3027973a007d7e8c").using("btree", table.whoId.asc().nullsLast().op("text_ops")),
	foreignKey({
			columns: [table.whoId],
			foreignColumns: [account.id],
			name: "FK_fecbe1491c3027973a007d7e8c8"
		}),
]);

export const merchantRedeemed = pgTable("merchant_redeemed", {
	id: varchar().primaryKey().notNull(),
	blockNumber: integer("block_number").notNull(),
	blockHash: text("block_hash").notNull(),
	timestamp: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	extrinsicHash: text("extrinsic_hash").notNull(),
	fee: numeric().notNull(),
	success: boolean().notNull(),
	token: varchar({ length: 4 }).notNull(),
	amount: numeric().notNull(),
	whoId: varchar("who_id"),
}, (table) => [
	index("IDX_09a3b52dc58d8f9bca804dc99c").using("btree", table.blockHash.asc().nullsLast().op("text_ops")),
	index("IDX_376073cc34baa9dc56b05ab682").using("btree", table.timestamp.asc().nullsLast().op("timestamptz_ops")),
	index("IDX_8ec23a64252efb4aaf46d2be4e").using("btree", table.extrinsicHash.asc().nullsLast().op("text_ops")),
	index("IDX_b64382043c672cf167c36915c7").using("btree", table.blockNumber.asc().nullsLast().op("int4_ops")),
	index("IDX_f2ddac68d6bb8ea3b15951b659").using("btree", table.whoId.asc().nullsLast().op("text_ops")),
	foreignKey({
			columns: [table.whoId],
			foreignColumns: [account.id],
			name: "FK_f2ddac68d6bb8ea3b15951b659d"
		}),
]);

export const greenPointsTransaction = pgTable("green_points_transaction", {
	id: varchar().primaryKey().notNull(),
	blockNumber: integer("block_number").notNull(),
	blockHash: text("block_hash").notNull(),
	timestamp: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	extrinsicHash: text("extrinsic_hash").notNull(),
	fee: numeric().notNull(),
	success: boolean().notNull(),
	merchantGp: numeric("merchant_gp").notNull(),
	consumerGp: numeric("consumer_gp").notNull(),
	merchantId: varchar("merchant_id"),
	consumerId: varchar("consumer_id"),
}, (table) => [
	index("IDX_3ccf1b62ca9e0be880ff213e01").using("btree", table.blockNumber.asc().nullsLast().op("int4_ops")),
	index("IDX_6e5ecd161c77ed60d939656d0b").using("btree", table.timestamp.asc().nullsLast().op("timestamptz_ops")),
	index("IDX_7b3d25bbf2c66ec9967badb458").using("btree", table.consumerId.asc().nullsLast().op("text_ops")),
	index("IDX_a2385a2c8d56bfdec7ea8439b7").using("btree", table.merchantId.asc().nullsLast().op("text_ops")),
	index("IDX_cb1f4346ea375f8138e96c8a5d").using("btree", table.extrinsicHash.asc().nullsLast().op("text_ops")),
	index("IDX_cc3646c3cf40679c421911dac8").using("btree", table.blockHash.asc().nullsLast().op("text_ops")),
	foreignKey({
			columns: [table.merchantId],
			foreignColumns: [account.id],
			name: "FK_a2385a2c8d56bfdec7ea8439b7a"
		}),
	foreignKey({
			columns: [table.consumerId],
			foreignColumns: [account.id],
			name: "FK_7b3d25bbf2c66ec9967badb4580"
		}),
]);

export const merchantPaymentSent = pgTable("merchant_payment_sent", {
	id: varchar().primaryKey().notNull(),
	blockNumber: integer("block_number").notNull(),
	blockHash: text("block_hash").notNull(),
	timestamp: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	extrinsicHash: text("extrinsic_hash").notNull(),
	fee: numeric().notNull(),
	success: boolean().notNull(),
	amount: numeric().notNull(),
	paymentToken: varchar("payment_token", { length: 4 }).notNull(),
	merchantId: varchar("merchant_id"),
	consumerId: varchar("consumer_id"),
}, (table) => [
	index("IDX_2e3a8eefe93712eac8d62aa325").using("btree", table.blockHash.asc().nullsLast().op("text_ops")),
	index("IDX_76948cada2a2956a080d20e33c").using("btree", table.timestamp.asc().nullsLast().op("timestamptz_ops")),
	index("IDX_8260de7d338ff54ae1eeaab281").using("btree", table.merchantId.asc().nullsLast().op("text_ops")),
	index("IDX_8a7da6bd438ef7d338a1d9ef24").using("btree", table.blockNumber.asc().nullsLast().op("int4_ops")),
	index("IDX_94d4df0286b9aa2c3f1fad30d8").using("btree", table.consumerId.asc().nullsLast().op("text_ops")),
	index("IDX_d56cb1bbf84d8be8eecce28891").using("btree", table.extrinsicHash.asc().nullsLast().op("text_ops")),
	foreignKey({
			columns: [table.merchantId],
			foreignColumns: [account.id],
			name: "FK_8260de7d338ff54ae1eeaab2813"
		}),
	foreignKey({
			columns: [table.consumerId],
			foreignColumns: [account.id],
			name: "FK_94d4df0286b9aa2c3f1fad30d80"
		}),
]);

export const nodeRewardPaid = pgTable("node_reward_paid", {
	id: varchar().primaryKey().notNull(),
	blockNumber: integer("block_number").notNull(),
	blockHash: text("block_hash").notNull(),
	timestamp: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	extrinsicHash: text("extrinsic_hash").notNull(),
	fee: numeric().notNull(),
	success: boolean().notNull(),
	amount: numeric().notNull(),
	nodeId: varchar("node_id"),
	receiverId: varchar("receiver_id"),
}, (table) => [
	index("IDX_42b939f852084380307cc62022").using("btree", table.blockNumber.asc().nullsLast().op("int4_ops")),
	index("IDX_632cc7269f2bd93d6bb3af734f").using("btree", table.receiverId.asc().nullsLast().op("text_ops")),
	index("IDX_65b06323ae4e200ba86b0a6564").using("btree", table.blockHash.asc().nullsLast().op("text_ops")),
	index("IDX_b3d0968d8108ee4fd728096f57").using("btree", table.timestamp.asc().nullsLast().op("timestamptz_ops")),
	index("IDX_bb9eceaa0cdb03ee56e6386da3").using("btree", table.extrinsicHash.asc().nullsLast().op("text_ops")),
	index("IDX_df2e0f731cfe88eb5bc3747f6c").using("btree", table.nodeId.asc().nullsLast().op("text_ops")),
	foreignKey({
			columns: [table.nodeId],
			foreignColumns: [account.id],
			name: "FK_df2e0f731cfe88eb5bc3747f6c5"
		}),
	foreignKey({
			columns: [table.receiverId],
			foreignColumns: [account.id],
			name: "FK_632cc7269f2bd93d6bb3af734fb"
		}),
]);

export const block = pgTable("block", {
	id: varchar().primaryKey().notNull(),
	number: integer().notNull(),
	timestamp: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	hash: text().notNull(),
	parentHash: text("parent_hash").notNull(),
	stateRoot: text("state_root").notNull(),
	extrinsicsRoot: text("extrinsics_root").notNull(),
	specName: text("spec_name").notNull(),
	specVersion: integer("spec_version").notNull(),
	implName: text("impl_name").notNull(),
	implVersion: integer("impl_version").notNull(),
	validatorId: varchar("validator_id"),
}, (table) => [
	index("IDX_0fe91a38b9077fa6649440b535").using("btree", table.extrinsicsRoot.asc().nullsLast().op("text_ops")),
	index("IDX_38414873c187a3e0c7943bc4c7").using("btree", table.number.asc().nullsLast().op("int4_ops")),
	index("IDX_5c67cbcf4960c1a39e5fe25e87").using("btree", table.timestamp.asc().nullsLast().op("timestamptz_ops")),
	index("IDX_5e5476a5d105f43ab5bb2c3e77").using("btree", table.validatorId.asc().nullsLast().op("text_ops")),
	index("IDX_cb4ef42b2c566c2a8045aa97b6").using("btree", table.parentHash.asc().nullsLast().op("text_ops")),
	index("IDX_f8fba63d7965bfee9f304c487a").using("btree", table.hash.asc().nullsLast().op("text_ops")),
	index("IDX_ff40b28f2cba8ee97c50aa2c52").using("btree", table.stateRoot.asc().nullsLast().op("text_ops")),
	foreignKey({
			columns: [table.validatorId],
			foreignColumns: [account.id],
			name: "FK_5e5476a5d105f43ab5bb2c3e779"
		}),
]);

export const event = pgTable("event", {
	id: varchar().primaryKey().notNull(),
	extrinsicHash: text("extrinsic_hash").notNull(),
	index: integer().notNull(),
	timestamp: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	module: text().notNull(),
	name: text().notNull(),
	attributes: jsonb().notNull(),
	success: boolean().notNull(),
	blockId: varchar("block_id"),
	extrinsicId: varchar("extrinsic_id"),
	callId: varchar("call_id"),
}, (table) => [
	index("IDX_129efedcb305c80256db2d57a5").using("btree", table.extrinsicId.asc().nullsLast().op("text_ops")),
	index("IDX_2b0d35d675c4f99751855c4502").using("btree", table.blockId.asc().nullsLast().op("text_ops")),
	index("IDX_2c15918ff289396205521c5f3c").using("btree", table.timestamp.asc().nullsLast().op("timestamptz_ops")),
	index("IDX_5849a08a8bedd645c758b85d26").using("btree", table.extrinsicHash.asc().nullsLast().op("text_ops")),
	index("IDX_83cf1bd59aa4521ed882fa5145").using("btree", table.callId.asc().nullsLast().op("text_ops")),
	index("IDX_b535fbe8ec6d832dde22065ebd").using("btree", table.name.asc().nullsLast().op("text_ops")),
	index("IDX_cc4a03697c24814df8d7ebc501").using("btree", table.module.asc().nullsLast().op("text_ops")),
	index("IDX_da3f402a04a5bf731cc20997a4").using("btree", table.index.asc().nullsLast().op("int4_ops")),
	foreignKey({
			columns: [table.blockId],
			foreignColumns: [block.id],
			name: "FK_2b0d35d675c4f99751855c45021"
		}),
	foreignKey({
			columns: [table.extrinsicId],
			foreignColumns: [extrinsic.id],
			name: "FK_129efedcb305c80256db2d57a59"
		}),
	foreignKey({
			columns: [table.callId],
			foreignColumns: [call.id],
			name: "FK_83cf1bd59aa4521ed882fa51452"
		}),
]);

export const extrinsic = pgTable("extrinsic", {
	id: varchar().primaryKey().notNull(),
	index: integer().notNull(),
	timestamp: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	hash: text(),
	module: text(),
	call: text(),
	success: boolean().notNull(),
	parameters: jsonb().notNull(),
	blockId: varchar("block_id"),
	signerId: varchar("signer_id"),
}, (table) => [
	index("IDX_1f45de0713a55049009e8e8127").using("btree", table.hash.asc().nullsLast().op("text_ops")),
	index("IDX_42ab437e6d4f76354a0a15a6c9").using("btree", table.call.asc().nullsLast().op("text_ops")),
	index("IDX_4eb783f0139bdc1634e3b16041").using("btree", table.module.asc().nullsLast().op("text_ops")),
	index("IDX_6e232918078798b1fade21dcf8").using("btree", table.timestamp.asc().nullsLast().op("timestamptz_ops")),
	index("IDX_886be421c92f221ac8234c6624").using("btree", table.signerId.asc().nullsLast().op("text_ops")),
	index("IDX_91b0c68a28f1eed15d736d7e11").using("btree", table.index.asc().nullsLast().op("int4_ops")),
	index("IDX_a3b99daba1259dab0dd040d4f7").using("btree", table.blockId.asc().nullsLast().op("text_ops")),
	foreignKey({
			columns: [table.blockId],
			foreignColumns: [block.id],
			name: "FK_a3b99daba1259dab0dd040d4f74"
		}),
	foreignKey({
			columns: [table.signerId],
			foreignColumns: [account.id],
			name: "FK_886be421c92f221ac8234c6624c"
		}),
]);

export const call = pgTable("call", {
	id: varchar().primaryKey().notNull(),
	extrinsicHash: text("extrinsic_hash").notNull(),
	index: integer().notNull(),
	timestamp: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	method: text().notNull(),
	call: text().notNull(),
	parameters: jsonb().notNull(),
	success: boolean().notNull(),
	blockId: varchar("block_id"),
	extrinsicId: varchar("extrinsic_id"),
	addressId: varchar("address_id"),
}, (table) => [
	index("IDX_1295671fc13e1d7c243c897104").using("btree", table.call.asc().nullsLast().op("text_ops")),
	index("IDX_638ba9d3d6a8224e66d404d784").using("btree", table.extrinsicHash.asc().nullsLast().op("text_ops")),
	index("IDX_6f635f2379199699013477fde9").using("btree", table.method.asc().nullsLast().op("text_ops")),
	index("IDX_9c3f8e7db62a8010e67e93a7f8").using("btree", table.addressId.asc().nullsLast().op("text_ops")),
	index("IDX_a032945f45cacda2d30f4286df").using("btree", table.timestamp.asc().nullsLast().op("timestamptz_ops")),
	index("IDX_bd3f11fd4110d60ac8b96cd62f").using("btree", table.blockId.asc().nullsLast().op("text_ops")),
	index("IDX_d503ba978fd183484a1e20dce1").using("btree", table.index.asc().nullsLast().op("int4_ops")),
	index("IDX_dde30e4f2c6a80f9236bfdf259").using("btree", table.extrinsicId.asc().nullsLast().op("text_ops")),
	foreignKey({
			columns: [table.blockId],
			foreignColumns: [block.id],
			name: "FK_bd3f11fd4110d60ac8b96cd62f3"
		}),
	foreignKey({
			columns: [table.extrinsicId],
			foreignColumns: [extrinsic.id],
			name: "FK_dde30e4f2c6a80f9236bfdf2590"
		}),
	foreignKey({
			columns: [table.addressId],
			foreignColumns: [account.id],
			name: "FK_9c3f8e7db62a8010e67e93a7f84"
		}),
]);

export const account = pgTable("account", {
	id: varchar().primaryKey().notNull(),
	d9Balance: numeric("d9_balance"),
	usdtBalance: numeric("usdt_balance"),
	greenPointsBalance: numeric("green_points_balance"),
	mineBalance: numeric("mine_balance"),
}, (table) => [
	index("IDX_97ca34b44513640f642da1b790").using("btree", table.usdtBalance.asc().nullsLast().op("numeric_ops")),
	index("IDX_9fd14b77ca20fc8a67b8a37b32").using("btree", table.greenPointsBalance.asc().nullsLast().op("numeric_ops")),
	index("IDX_a1794e1af1c3b16c76f7c216b3").using("btree", table.d9Balance.asc().nullsLast().op("numeric_ops")),
	index("IDX_b092df7b8388e50aaba0686a5b").using("btree", table.mineBalance.asc().nullsLast().op("numeric_ops")),
]);
