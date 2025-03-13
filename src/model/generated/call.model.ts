import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_, IntColumn as IntColumn_, DateTimeColumn as DateTimeColumn_, StringColumn as StringColumn_, JSONColumn as JSONColumn_, OneToMany as OneToMany_} from "@subsquid/typeorm-store"
import {Block} from "./block.model"
import {Extrinsic} from "./extrinsic.model"
import {Account} from "./account.model"
import {Event} from "./event.model"

@Entity_()
export class Call {
    constructor(props?: Partial<Call>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => Block, {nullable: true})
    block!: Block

    @Index_()
    @ManyToOne_(() => Extrinsic, {nullable: true})
    extrinsic!: Extrinsic

    @Index_()
    @IntColumn_({nullable: false})
    index!: number

    @Index_()
    @DateTimeColumn_({nullable: false})
    timestamp!: Date

    @Index_()
    @ManyToOne_(() => Account, {nullable: true})
    address!: Account

    @Index_()
    @StringColumn_({nullable: false})
    method!: string

    @Index_()
    @StringColumn_({nullable: false})
    call!: string

    @JSONColumn_({nullable: false})
    parameters!: unknown

    @OneToMany_(() => Event, e => e.call)
    events!: Event[]
}
