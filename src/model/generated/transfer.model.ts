import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, IntColumn as IntColumn_, Index as Index_, StringColumn as StringColumn_, DateTimeColumn as DateTimeColumn_, BigIntColumn as BigIntColumn_, ManyToOne as ManyToOne_, BooleanColumn as BooleanColumn_} from "@subsquid/typeorm-store"
import {Account} from "./account.model"
import {Token} from "./_token"

@Entity_()
export class Transfer {
    constructor(props?: Partial<Transfer>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @IntColumn_({nullable: false})
    blockNumber!: number

    @Index_()
    @StringColumn_({nullable: false})
    blockHash!: string

    @Index_()
    @DateTimeColumn_({nullable: false})
    timestamp!: Date

    @Index_()
    @StringColumn_({nullable: false})
    extrinsicHash!: string

    @BigIntColumn_({nullable: false})
    fee!: bigint

    @Index_()
    @ManyToOne_(() => Account, {nullable: true})
    from!: Account

    @Index_()
    @ManyToOne_(() => Account, {nullable: true})
    to!: Account

    @Index_()
    @BigIntColumn_({nullable: false})
    amount!: bigint

    @BooleanColumn_({nullable: false})
    success!: boolean

    @Index_()
    @Column_("varchar", {length: 4, nullable: false})
    token!: Token
}
