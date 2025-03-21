import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_, StringColumn as StringColumn_, IntColumn as IntColumn_, DateTimeColumn as DateTimeColumn_, JSONColumn as JSONColumn_, BooleanColumn as BooleanColumn_} from "@subsquid/typeorm-store"
import {Block} from "./block.model"
import {Extrinsic} from "./extrinsic.model"
import {Call} from "./call.model"

@Entity_()
export class Event {
    constructor(props?: Partial<Event>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => Block, {nullable: true})
    block!: Block

    @Index_()
    @ManyToOne_(() => Extrinsic, {nullable: true})
    extrinsic!: Extrinsic | undefined | null

    @Index_()
    @StringColumn_({nullable: false})
    extrinsicHash!: string

    @Index_()
    @IntColumn_({nullable: false})
    index!: number

    @Index_()
    @DateTimeColumn_({nullable: false})
    timestamp!: Date

    @Index_()
    @StringColumn_({nullable: false})
    module!: string

    @Index_()
    @StringColumn_({nullable: false})
    name!: string

    @JSONColumn_({nullable: false})
    attributes!: unknown

    @BooleanColumn_({nullable: false})
    success!: boolean

    @Index_()
    @ManyToOne_(() => Call, {nullable: true})
    call!: Call | undefined | null
}
