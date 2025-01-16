import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_, IntColumn as IntColumn_, StringColumn as StringColumn_, BooleanColumn as BooleanColumn_, JSONColumn as JSONColumn_, OneToMany as OneToMany_} from "@subsquid/typeorm-store"
import {Block} from "./block.model"
import {Account} from "./account.model"
import {Call} from "./call.model"
import {Event} from "./event.model"

@Entity_()
export class Extrinsic {
    constructor(props?: Partial<Extrinsic>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => Block, {nullable: true})
    block!: Block

    @Index_()
    @IntColumn_({nullable: false})
    index!: number

    @Index_()
    @StringColumn_({nullable: true})
    hash!: string | undefined | null

    @Index_()
    @StringColumn_({nullable: false})
    module!: string

    @Index_()
    @StringColumn_({nullable: false})
    call!: string

    @Index_()
    @ManyToOne_(() => Account, {nullable: true})
    signer!: Account | undefined | null

    @BooleanColumn_({nullable: false})
    success!: boolean

    @JSONColumn_({nullable: false})
    parameters!: unknown

    @OneToMany_(() => Call, e => e.extrinsic)
    calls!: Call[]

    @OneToMany_(() => Event, e => e.extrinsic)
    events!: Event[]
}
