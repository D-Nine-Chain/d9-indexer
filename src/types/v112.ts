import {sts, Result, Option, Bytes, BitSequence} from './support'

export interface IdAmount {
    amount: bigint
}

export const IdAmount: sts.Type<IdAmount> = sts.struct(() => {
    return  {
        amount: sts.bigint(),
    }
})

export interface ReserveData {
    amount: bigint
}

export const ReserveData: sts.Type<ReserveData> = sts.struct(() => {
    return  {
        amount: sts.bigint(),
    }
})

export interface BalanceLock {
    id: Bytes
    amount: bigint
    reasons: Reasons
}

export type Reasons = Reasons_All | Reasons_Fee | Reasons_Misc

export interface Reasons_All {
    __kind: 'All'
}

export interface Reasons_Fee {
    __kind: 'Fee'
}

export interface Reasons_Misc {
    __kind: 'Misc'
}

export const BalanceLock: sts.Type<BalanceLock> = sts.struct(() => {
    return  {
        id: sts.bytes(),
        amount: sts.bigint(),
        reasons: Reasons,
    }
})

export const Reasons: sts.Type<Reasons> = sts.closedEnum(() => {
    return  {
        All: sts.unit(),
        Fee: sts.unit(),
        Misc: sts.unit(),
    }
})

export interface AccountData {
    free: bigint
    reserved: bigint
    frozen: bigint
    flags: ExtraFlags
}

export type ExtraFlags = bigint

export const AccountData: sts.Type<AccountData> = sts.struct(() => {
    return  {
        free: sts.bigint(),
        reserved: sts.bigint(),
        frozen: sts.bigint(),
        flags: ExtraFlags,
    }
})

export const ExtraFlags = sts.bigint()

export interface NodeMetadataStruct {
    name: BoundedVec
    sharingPercent: number
    indexOfLastPercentChange: number
}

export type BoundedVec = Bytes

export interface ValidatorVoteStats {
    accountId: AccountId32
    totalVotes: bigint
    selfVotes: bigint
    delegatedVotes: bigint
}

export const ValidatorVoteStats: sts.Type<ValidatorVoteStats> = sts.struct(() => {
    return  {
        accountId: AccountId32,
        totalVotes: sts.bigint(),
        selfVotes: sts.bigint(),
        delegatedVotes: sts.bigint(),
    }
})

export type AccountId32 = Bytes

export interface VotingInterest {
    total: bigint
    delegated: bigint
}

export const VotingInterest: sts.Type<VotingInterest> = sts.struct(() => {
    return  {
        total: sts.bigint(),
        delegated: sts.bigint(),
    }
})

export const MultiAddress: sts.Type<MultiAddress> = sts.closedEnum(() => {
    return  {
        Address20: sts.bytes(),
        Address32: sts.bytes(),
        Id: AccountId32,
        Index: sts.unit(),
        Raw: sts.bytes(),
    }
})

export type MultiAddress = MultiAddress_Address20 | MultiAddress_Address32 | MultiAddress_Id | MultiAddress_Index | MultiAddress_Raw

export interface MultiAddress_Address20 {
    __kind: 'Address20'
    value: Bytes
}

export interface MultiAddress_Address32 {
    __kind: 'Address32'
    value: Bytes
}

export interface MultiAddress_Id {
    __kind: 'Id'
    value: AccountId32
}

export interface MultiAddress_Index {
    __kind: 'Index'
}

export interface MultiAddress_Raw {
    __kind: 'Raw'
    value: Bytes
}

export const BoundedVec = sts.bytes()

export const ValidatorDelegations: sts.Type<ValidatorDelegations> = sts.struct(() => {
    return  {
        candidate: AccountId32,
        votes: sts.bigint(),
    }
})

export interface ValidatorDelegations {
    candidate: AccountId32
    votes: bigint
}

export const Weight: sts.Type<Weight> = sts.struct(() => {
    return  {
        refTime: sts.bigint(),
        proofSize: sts.bigint(),
    }
})

export interface Weight {
    refTime: bigint
    proofSize: bigint
}

export const NodeMetadataStruct: sts.Type<NodeMetadataStruct> = sts.struct(() => {
    return  {
        name: BoundedVec,
        sharingPercent: sts.number(),
        indexOfLastPercentChange: sts.number(),
    }
})

export const BalanceStatus: sts.Type<BalanceStatus> = sts.closedEnum(() => {
    return  {
        Free: sts.unit(),
        Reserved: sts.unit(),
    }
})

export type BalanceStatus = BalanceStatus_Free | BalanceStatus_Reserved

export interface BalanceStatus_Free {
    __kind: 'Free'
}

export interface BalanceStatus_Reserved {
    __kind: 'Reserved'
}

export const AccountId32 = sts.bytes()
