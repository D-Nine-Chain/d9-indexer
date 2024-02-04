import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, OneToMany as OneToMany_} from "typeorm"
import {Transfer} from "./transfer.model"
import {Withdraw} from "./withdraw.model"
import {Burn} from "./burn.model"

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

    @OneToMany_(() => Burn, e => e.who)
    burns!: Burn[]
}
