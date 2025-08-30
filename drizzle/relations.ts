import { relations } from "drizzle-orm/relations";
import { account, transfer, withdraw, nodeVote, burnExecuted, burnWithdrawal, crossChainCommitCreated, crossChainDispatchCompleted, liquidityAdded, liquidityRemoved, marketConversion, merchantSubscriptionExtended, merchantRedeemed, greenPointsTransaction, merchantPaymentSent, nodeRewardPaid, block, event, extrinsic, call } from "./schema";

export const transferRelations = relations(transfer, ({one}) => ({
	account_fromId: one(account, {
		fields: [transfer.fromId],
		references: [account.id],
		relationName: "transfer_fromId_account_id"
	}),
	account_toId: one(account, {
		fields: [transfer.toId],
		references: [account.id],
		relationName: "transfer_toId_account_id"
	}),
}));

export const accountRelations = relations(account, ({many}) => ({
	transfers_fromId: many(transfer, {
		relationName: "transfer_fromId_account_id"
	}),
	transfers_toId: many(transfer, {
		relationName: "transfer_toId_account_id"
	}),
	withdraws: many(withdraw),
	nodeVotes: many(nodeVote),
	burnExecuteds: many(burnExecuted),
	burnWithdrawals: many(burnWithdrawal),
	crossChainCommitCreateds: many(crossChainCommitCreated),
	crossChainDispatchCompleteds: many(crossChainDispatchCompleted),
	liquidityAddeds: many(liquidityAdded),
	liquidityRemoveds: many(liquidityRemoved),
	marketConversions: many(marketConversion),
	merchantSubscriptionExtendeds: many(merchantSubscriptionExtended),
	merchantRedeemeds: many(merchantRedeemed),
	greenPointsTransactions_merchantId: many(greenPointsTransaction, {
		relationName: "greenPointsTransaction_merchantId_account_id"
	}),
	greenPointsTransactions_consumerId: many(greenPointsTransaction, {
		relationName: "greenPointsTransaction_consumerId_account_id"
	}),
	merchantPaymentSents_merchantId: many(merchantPaymentSent, {
		relationName: "merchantPaymentSent_merchantId_account_id"
	}),
	merchantPaymentSents_consumerId: many(merchantPaymentSent, {
		relationName: "merchantPaymentSent_consumerId_account_id"
	}),
	nodeRewardPaids_nodeId: many(nodeRewardPaid, {
		relationName: "nodeRewardPaid_nodeId_account_id"
	}),
	nodeRewardPaids_receiverId: many(nodeRewardPaid, {
		relationName: "nodeRewardPaid_receiverId_account_id"
	}),
	blocks: many(block),
	extrinsics: many(extrinsic),
	calls: many(call),
}));

export const withdrawRelations = relations(withdraw, ({one}) => ({
	account: one(account, {
		fields: [withdraw.whoId],
		references: [account.id]
	}),
}));

export const nodeVoteRelations = relations(nodeVote, ({one}) => ({
	account: one(account, {
		fields: [nodeVote.beneficiaryVoterId],
		references: [account.id]
	}),
}));

export const burnExecutedRelations = relations(burnExecuted, ({one}) => ({
	account: one(account, {
		fields: [burnExecuted.fromId],
		references: [account.id]
	}),
}));

export const burnWithdrawalRelations = relations(burnWithdrawal, ({one}) => ({
	account: one(account, {
		fields: [burnWithdrawal.fromId],
		references: [account.id]
	}),
}));

export const crossChainCommitCreatedRelations = relations(crossChainCommitCreated, ({one}) => ({
	account: one(account, {
		fields: [crossChainCommitCreated.fromId],
		references: [account.id]
	}),
}));

export const crossChainDispatchCompletedRelations = relations(crossChainDispatchCompleted, ({one}) => ({
	account: one(account, {
		fields: [crossChainDispatchCompleted.toId],
		references: [account.id]
	}),
}));

export const liquidityAddedRelations = relations(liquidityAdded, ({one}) => ({
	account: one(account, {
		fields: [liquidityAdded.whoId],
		references: [account.id]
	}),
}));

export const liquidityRemovedRelations = relations(liquidityRemoved, ({one}) => ({
	account: one(account, {
		fields: [liquidityRemoved.whoId],
		references: [account.id]
	}),
}));

export const marketConversionRelations = relations(marketConversion, ({one}) => ({
	account: one(account, {
		fields: [marketConversion.whoId],
		references: [account.id]
	}),
}));

export const merchantSubscriptionExtendedRelations = relations(merchantSubscriptionExtended, ({one}) => ({
	account: one(account, {
		fields: [merchantSubscriptionExtended.whoId],
		references: [account.id]
	}),
}));

export const merchantRedeemedRelations = relations(merchantRedeemed, ({one}) => ({
	account: one(account, {
		fields: [merchantRedeemed.whoId],
		references: [account.id]
	}),
}));

export const greenPointsTransactionRelations = relations(greenPointsTransaction, ({one}) => ({
	account_merchantId: one(account, {
		fields: [greenPointsTransaction.merchantId],
		references: [account.id],
		relationName: "greenPointsTransaction_merchantId_account_id"
	}),
	account_consumerId: one(account, {
		fields: [greenPointsTransaction.consumerId],
		references: [account.id],
		relationName: "greenPointsTransaction_consumerId_account_id"
	}),
}));

export const merchantPaymentSentRelations = relations(merchantPaymentSent, ({one}) => ({
	account_merchantId: one(account, {
		fields: [merchantPaymentSent.merchantId],
		references: [account.id],
		relationName: "merchantPaymentSent_merchantId_account_id"
	}),
	account_consumerId: one(account, {
		fields: [merchantPaymentSent.consumerId],
		references: [account.id],
		relationName: "merchantPaymentSent_consumerId_account_id"
	}),
}));

export const nodeRewardPaidRelations = relations(nodeRewardPaid, ({one}) => ({
	account_nodeId: one(account, {
		fields: [nodeRewardPaid.nodeId],
		references: [account.id],
		relationName: "nodeRewardPaid_nodeId_account_id"
	}),
	account_receiverId: one(account, {
		fields: [nodeRewardPaid.receiverId],
		references: [account.id],
		relationName: "nodeRewardPaid_receiverId_account_id"
	}),
}));

export const blockRelations = relations(block, ({one, many}) => ({
	account: one(account, {
		fields: [block.validatorId],
		references: [account.id]
	}),
	events: many(event),
	extrinsics: many(extrinsic),
	calls: many(call),
}));

export const eventRelations = relations(event, ({one}) => ({
	block: one(block, {
		fields: [event.blockId],
		references: [block.id]
	}),
	extrinsic: one(extrinsic, {
		fields: [event.extrinsicId],
		references: [extrinsic.id]
	}),
	call: one(call, {
		fields: [event.callId],
		references: [call.id]
	}),
}));

export const extrinsicRelations = relations(extrinsic, ({one, many}) => ({
	events: many(event),
	block: one(block, {
		fields: [extrinsic.blockId],
		references: [block.id]
	}),
	account: one(account, {
		fields: [extrinsic.signerId],
		references: [account.id]
	}),
	calls: many(call),
}));

export const callRelations = relations(call, ({one, many}) => ({
	events: many(event),
	block: one(block, {
		fields: [call.blockId],
		references: [block.id]
	}),
	extrinsic: one(extrinsic, {
		fields: [call.extrinsicId],
		references: [extrinsic.id]
	}),
	account: one(account, {
		fields: [call.addressId],
		references: [account.id]
	}),
}));