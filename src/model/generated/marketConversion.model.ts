import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, IntColumn as IntColumn_, Index as Index_, StringColumn as StringColumn_, DateTimeColumn as DateTimeColumn_, BigIntColumn as BigIntColumn_, BooleanColumn as BooleanColumn_, ManyToOne as ManyToOne_} from "@subsquid/typeorm-store"
import {Token} from "./_token"
import {Account} from "./account.model"

@Entity_()
export class MarketConversion {
    constructor(props?: Partial<MarketConversion>) {
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

    @BooleanColumn_({nullable: false})
    success!: boolean

    @Column_("varchar", {length: 4, nullable: false})
    fromToken!: Token

    @Column_("varchar", {length: 4, nullable: false})
    toToken!: Token

    @BigIntColumn_({nullable: false})
    lost!: bigint

    @BigIntColumn_({nullable: false})
    got!: bigint

    @Index_()
    @ManyToOne_(() => Account, {nullable: true})
    who!: Account
}
