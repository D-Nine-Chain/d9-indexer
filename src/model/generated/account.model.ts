import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, OneToMany as OneToMany_} from "typeorm"
import {Transfer} from "./transfer.model"
import {Withdraw} from "./withdraw.model"
import {Burn} from "./burn.model"
import {BurnWithdrawal} from "./burnWithdrawal.model"
import {CrossChainCommitment} from "./crossChainCommitment.model"
import {CrossChainDispatch} from "./crossChainDispatch.model"
import {NodeVote} from "./nodeVote.model"
import {AddLiquidity} from "./addLiquidity.model"
import {MarketGetToken} from "./marketGetToken.model"
import {MerchantSubscription} from "./merchantSubscription.model"
import {GreenPointsTransaction} from "./greenPointsTransaction.model"

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

    @OneToMany_(() => Transfer, e => e.to)
    transfersTo!: Transfer[]

    @OneToMany_(() => Transfer, e => e.from)
    transfersFrom!: Transfer[]

    @OneToMany_(() => Withdraw, e => e.who)
    withdrawals!: Withdraw[]

    @OneToMany_(() => Burn, e => e.from)
    burns!: Burn[]

    @OneToMany_(() => BurnWithdrawal, e => e.from)
    burnWithdrawals!: BurnWithdrawal[]

    @OneToMany_(() => CrossChainCommitment, e => e.from)
    crossChainCommitmentsFrom!: CrossChainCommitment[]

    @OneToMany_(() => CrossChainDispatch, e => e.to)
    crossChainDispatchesTo!: CrossChainDispatch[]

    @OneToMany_(() => NodeVote, e => e.beneficiaryVoter)
    asNodeVotingBeneficiary!: NodeVote[]

    @OneToMany_(() => AddLiquidity, e => e.who)
    addedLiquidity!: AddLiquidity[]

    @OneToMany_(() => AddLiquidity, e => e.who)
    removedLiquidity!: AddLiquidity[]

    @OneToMany_(() => MarketGetToken, e => e.who)
    marketGetTokens!: MarketGetToken[]

    @OneToMany_(() => MerchantSubscription, e => e.who)
    merchantSubscriptions!: MerchantSubscription[]

    @OneToMany_(() => GreenPointsTransaction, e => e.consumer)
    greenPointsTrxAsConsumer!: GreenPointsTransaction[]

    @OneToMany_(() => GreenPointsTransaction, e => e.merchant)
    greenPointsTrxAsMerchant!: GreenPointsTransaction[]
}
