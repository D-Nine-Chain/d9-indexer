import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_, ManyToOne as ManyToOne_} from "typeorm"
import * as marshal from "./marshal"
import {Token} from "./_token"
import {Account} from "./account.model"

@Entity_()
export class MarketGetToken {
    constructor(props?: Partial<MarketGetToken>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @Column_("int4", {nullable: false})
    blockNumber!: number

    @Index_()
    @Column_("timestamp with time zone", {nullable: false})
    timestamp!: Date

    @Index_()
    @Column_("text", {nullable: true})
    extrinsicHash!: string | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    fee!: bigint

    @Column_("varchar", {length: 4, nullable: false})
    token!: Token

    @Index_()
    @ManyToOne_(() => Account, {nullable: true})
    who!: Account

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    value!: bigint
}
