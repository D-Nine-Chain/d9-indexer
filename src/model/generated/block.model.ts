import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, IntColumn as IntColumn_, Index as Index_, DateTimeColumn as DateTimeColumn_, StringColumn as StringColumn_, ManyToOne as ManyToOne_, OneToMany as OneToMany_} from "@subsquid/typeorm-store"
import {Account} from "./account.model"
import {Extrinsic} from "./extrinsic.model"
import {Event} from "./event.model"
import {Call} from "./call.model"

@Entity_()
export class Block {
    constructor(props?: Partial<Block>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @IntColumn_({nullable: false})
    number!: number

    @Index_()
    @DateTimeColumn_({nullable: false})
    timestamp!: Date

    @Index_()
    @StringColumn_({nullable: false})
    hash!: string

    @Index_()
    @StringColumn_({nullable: false})
    parentHash!: string

    @Index_()
    @StringColumn_({nullable: false})
    stateRoot!: string

    @Index_()
    @StringColumn_({nullable: false})
    extrinsicsRoot!: string

    @Index_()
    @ManyToOne_(() => Account, {nullable: true})
    validator!: Account

    @StringColumn_({nullable: false})
    specName!: string

    @IntColumn_({nullable: false})
    specVersion!: number

    @StringColumn_({nullable: false})
    implName!: string

    @IntColumn_({nullable: false})
    implVersion!: number

    @OneToMany_(() => Extrinsic, e => e.block)
    extrinsics!: Extrinsic[]

    @OneToMany_(() => Event, e => e.block)
    events!: Event[]

    @OneToMany_(() => Call, e => e.block)
    calls!: Call[]
}
