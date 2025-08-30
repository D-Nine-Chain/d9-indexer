import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, BigIntColumn as BigIntColumn_, Index as Index_, OneToMany as OneToMany_} from "@subsquid/typeorm-store"
import {Transfer} from "./transfer.model"
import {Withdraw} from "./withdraw.model"
import {NodeVote} from "./nodeVote.model"
import {BurnExecuted} from "./burnExecuted.model"
import {BurnWithdrawal} from "./burnWithdrawal.model"
import {CrossChainCommitCreated} from "./crossChainCommitCreated.model"
import {CrossChainDispatchCompleted} from "./crossChainDispatchCompleted.model"
import {LiquidityAdded} from "./liquidityAdded.model"
import {LiquidityRemoved} from "./liquidityRemoved.model"
import {MarketConversion} from "./marketConversion.model"
import {MerchantSubscriptionExtended} from "./merchantSubscriptionExtended.model"
import {MerchantRedeemed} from "./merchantRedeemed.model"
import {GreenPointsTransaction} from "./greenPointsTransaction.model"
import {MerchantPaymentSent} from "./merchantPaymentSent.model"
import {NodeRewardPaid} from "./nodeRewardPaid.model"
import {Call} from "./call.model"

@Entity_()
export class Account {
    constructor(props?: Partial<Account>) {
        Object.assign(this, props)
    }

    /**
     * Account address
     */
    @PrimaryColumn_()
    id!: string

    @Index_()
    @BigIntColumn_({nullable: true})
    d9Balance!: bigint | undefined | null

    @Index_()
    @BigIntColumn_({nullable: true})
    usdtBalance!: bigint | undefined | null

    @Index_()
    @BigIntColumn_({nullable: true})
    greenPointsBalance!: bigint | undefined | null

    @Index_()
    @BigIntColumn_({nullable: true})
    mineBalance!: bigint | undefined | null

    @OneToMany_(() => Transfer, e => e.to)
    receivedTransfers!: Transfer[]

    @OneToMany_(() => Transfer, e => e.from)
    sendTransfers!: Transfer[]

    @OneToMany_(() => Withdraw, e => e.who)
    withdrawals!: Withdraw[]

    @OneToMany_(() => NodeVote, e => e.beneficiaryVoter)
    asNodeVotingBeneficiary!: NodeVote[]

    @OneToMany_(() => BurnExecuted, e => e.from)
    burnExecutes!: BurnExecuted[]

    @OneToMany_(() => BurnWithdrawal, e => e.from)
    burnWithdrawals!: BurnWithdrawal[]

    @OneToMany_(() => CrossChainCommitCreated, e => e.from)
    chainCommitments!: CrossChainCommitCreated[]

    @OneToMany_(() => CrossChainDispatchCompleted, e => e.to)
    crossChainDispatches!: CrossChainDispatchCompleted[]

    @OneToMany_(() => LiquidityAdded, e => e.who)
    liquidityAddeds!: LiquidityAdded[]

    @OneToMany_(() => LiquidityRemoved, e => e.who)
    liquidityRemoves!: LiquidityRemoved[]

    @OneToMany_(() => MarketConversion, e => e.who)
    marketConversions!: MarketConversion[]

    @OneToMany_(() => MerchantSubscriptionExtended, e => e.who)
    merchantSubscriptions!: MerchantSubscriptionExtended[]

    @OneToMany_(() => MerchantRedeemed, e => e.who)
    merchantRedeemeds!: MerchantRedeemed[]

    @OneToMany_(() => GreenPointsTransaction, e => e.consumer)
    sentGreenPointsTransactions!: GreenPointsTransaction[]

    @OneToMany_(() => GreenPointsTransaction, e => e.merchant)
    receivedGreenPointsTransactions!: GreenPointsTransaction[]

    @OneToMany_(() => MerchantPaymentSent, e => e.consumer)
    sentMerchantPayments!: MerchantPaymentSent[]

    @OneToMany_(() => MerchantPaymentSent, e => e.merchant)
    receivedMerchantPayments!: MerchantPaymentSent[]

    @OneToMany_(() => NodeRewardPaid, e => e.node)
    asNodeRewardNode!: NodeRewardPaid[]

    @OneToMany_(() => NodeRewardPaid, e => e.receiver)
    receivedNodeRewards!: NodeRewardPaid[]

    @OneToMany_(() => Call, e => e.address)
    calls!: Call[]
}
