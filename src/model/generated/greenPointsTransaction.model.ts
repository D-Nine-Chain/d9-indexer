import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_, ManyToOne as ManyToOne_} from "typeorm"
import * as marshal from "./marshal"
import {Account} from "./account.model"

@Entity_()
export class GreenPointsTransaction {
    constructor(props?: Partial<GreenPointsTransaction>) {
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

    @Index_()
    @ManyToOne_(() => Account, {nullable: true})
    merchant!: Account

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    merchantGP!: bigint

    @Index_()
    @ManyToOne_(() => Account, {nullable: true})
    consumer!: Account

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    consumerGP!: bigint
}
