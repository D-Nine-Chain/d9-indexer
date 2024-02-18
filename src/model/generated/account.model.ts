import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, OneToMany as OneToMany_} from "typeorm"
import {Transfer} from "./transfer.model"
import {Withdraw} from "./withdraw.model"
import {Burn} from "./burn.model"
import {BurnWithdrawal} from "./burnWithdrawal.model"
import {CrossChainCommitment} from "./crossChainCommitment.model"
import {CrossChainDispatch} from "./crossChainDispatch.model"

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
}
