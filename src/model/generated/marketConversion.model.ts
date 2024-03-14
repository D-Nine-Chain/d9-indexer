import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_, ManyToOne as ManyToOne_} from "typeorm"
import * as marshal from "./marshal"
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
    @Column_("int4", {nullable: false})
    blockNumber!: number

    @Index_()
    @Column_("text", {nullable: false})
    blockHash!: string

    @Index_()
    @Column_("timestamp with time zone", {nullable: false})
    timestamp!: Date

    @Index_()
    @Column_("text", {nullable: false})
    extrinsicHash!: string

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    fee!: bigint

    @Column_("varchar", {length: 4, nullable: false})
    fromToken!: Token

    @Column_("varchar", {length: 4, nullable: false})
    toToken!: Token

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    lost!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    got!: bigint

    @Index_()
    @ManyToOne_(() => Account, {nullable: true})
    who!: Account
}
