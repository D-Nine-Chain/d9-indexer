import {sts, Result, Option, Bytes, BitSequence} from './support'

export type AccountId32 = Bytes

export const AccountId32 = sts.bytes()
