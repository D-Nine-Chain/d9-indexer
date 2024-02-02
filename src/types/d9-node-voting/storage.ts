import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v110 from '../v110'

export const usersVotingInterests =  {
    /**
     *  defines the voting power of a user
     */
    v110: new StorageType('D9NodeVoting.UsersVotingInterests', 'Optional', [v110.AccountId32], v110.VotingInterest) as UsersVotingInterestsV110,
}

/**
 *  defines the voting power of a user
 */
export interface UsersVotingInterestsV110  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v110.AccountId32): Promise<(v110.VotingInterest | undefined)>
    getMany(block: Block, keys: v110.AccountId32[]): Promise<(v110.VotingInterest | undefined)[]>
    getKeys(block: Block): Promise<v110.AccountId32[]>
    getKeys(block: Block, key: v110.AccountId32): Promise<v110.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v110.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v110.AccountId32): AsyncIterable<v110.AccountId32[]>
    getPairs(block: Block): Promise<[k: v110.AccountId32, v: (v110.VotingInterest | undefined)][]>
    getPairs(block: Block, key: v110.AccountId32): Promise<[k: v110.AccountId32, v: (v110.VotingInterest | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v110.AccountId32, v: (v110.VotingInterest | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v110.AccountId32): AsyncIterable<[k: v110.AccountId32, v: (v110.VotingInterest | undefined)][]>
}

export const voteDelegations =  {
    /**
     *  defines the vote distribution of a user to some candidate
     */
    v110: new StorageType('D9NodeVoting.VoteDelegations', 'Default', [v110.AccountId32, v110.AccountId32], sts.bigint()) as VoteDelegationsV110,
}

/**
 *  defines the vote distribution of a user to some candidate
 */
export interface VoteDelegationsV110  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block, key1: v110.AccountId32, key2: v110.AccountId32): Promise<(bigint | undefined)>
    getMany(block: Block, keys: [v110.AccountId32, v110.AccountId32][]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<[v110.AccountId32, v110.AccountId32][]>
    getKeys(block: Block, key1: v110.AccountId32): Promise<[v110.AccountId32, v110.AccountId32][]>
    getKeys(block: Block, key1: v110.AccountId32, key2: v110.AccountId32): Promise<[v110.AccountId32, v110.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v110.AccountId32, v110.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v110.AccountId32): AsyncIterable<[v110.AccountId32, v110.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v110.AccountId32, key2: v110.AccountId32): AsyncIterable<[v110.AccountId32, v110.AccountId32][]>
    getPairs(block: Block): Promise<[k: [v110.AccountId32, v110.AccountId32], v: (bigint | undefined)][]>
    getPairs(block: Block, key1: v110.AccountId32): Promise<[k: [v110.AccountId32, v110.AccountId32], v: (bigint | undefined)][]>
    getPairs(block: Block, key1: v110.AccountId32, key2: v110.AccountId32): Promise<[k: [v110.AccountId32, v110.AccountId32], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v110.AccountId32, v110.AccountId32], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v110.AccountId32): AsyncIterable<[k: [v110.AccountId32, v110.AccountId32], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v110.AccountId32, key2: v110.AccountId32): AsyncIterable<[k: [v110.AccountId32, v110.AccountId32], v: (bigint | undefined)][]>
}

export const candidateSupporters =  {
    /**
     *  defines the supporters of a candidate
     */
    v110: new StorageType('D9NodeVoting.CandidateSupporters', 'Default', [v110.AccountId32, v110.AccountId32], sts.bigint()) as CandidateSupportersV110,
}

/**
 *  defines the supporters of a candidate
 */
export interface CandidateSupportersV110  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block, key1: v110.AccountId32, key2: v110.AccountId32): Promise<(bigint | undefined)>
    getMany(block: Block, keys: [v110.AccountId32, v110.AccountId32][]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<[v110.AccountId32, v110.AccountId32][]>
    getKeys(block: Block, key1: v110.AccountId32): Promise<[v110.AccountId32, v110.AccountId32][]>
    getKeys(block: Block, key1: v110.AccountId32, key2: v110.AccountId32): Promise<[v110.AccountId32, v110.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v110.AccountId32, v110.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v110.AccountId32): AsyncIterable<[v110.AccountId32, v110.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v110.AccountId32, key2: v110.AccountId32): AsyncIterable<[v110.AccountId32, v110.AccountId32][]>
    getPairs(block: Block): Promise<[k: [v110.AccountId32, v110.AccountId32], v: (bigint | undefined)][]>
    getPairs(block: Block, key1: v110.AccountId32): Promise<[k: [v110.AccountId32, v110.AccountId32], v: (bigint | undefined)][]>
    getPairs(block: Block, key1: v110.AccountId32, key2: v110.AccountId32): Promise<[k: [v110.AccountId32, v110.AccountId32], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v110.AccountId32, v110.AccountId32], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v110.AccountId32): AsyncIterable<[k: [v110.AccountId32, v110.AccountId32], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v110.AccountId32, key2: v110.AccountId32): AsyncIterable<[k: [v110.AccountId32, v110.AccountId32], v: (bigint | undefined)][]>
}

export const candidateAccumulativeVotes =  {
    /**
     *  grand total of votes for a candidate
     * 
     *  this Map can be no larger than MaxCandidates
     */
    v110: new StorageType('D9NodeVoting.CandidateAccumulativeVotes', 'Optional', [v110.AccountId32], sts.bigint()) as CandidateAccumulativeVotesV110,
}

/**
 *  grand total of votes for a candidate
 * 
 *  this Map can be no larger than MaxCandidates
 */
export interface CandidateAccumulativeVotesV110  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v110.AccountId32): Promise<(bigint | undefined)>
    getMany(block: Block, keys: v110.AccountId32[]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<v110.AccountId32[]>
    getKeys(block: Block, key: v110.AccountId32): Promise<v110.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v110.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v110.AccountId32): AsyncIterable<v110.AccountId32[]>
    getPairs(block: Block): Promise<[k: v110.AccountId32, v: (bigint | undefined)][]>
    getPairs(block: Block, key: v110.AccountId32): Promise<[k: v110.AccountId32, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v110.AccountId32, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v110.AccountId32): AsyncIterable<[k: v110.AccountId32, v: (bigint | undefined)][]>
}

export const currentNumberOfCandidates =  {
    v110: new StorageType('D9NodeVoting.CurrentNumberOfCandidates', 'Default', [], sts.number()) as CurrentNumberOfCandidatesV110,
}

export interface CurrentNumberOfCandidatesV110  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const sessionCandidateList =  {
    v110: new StorageType('D9NodeVoting.SessionCandidateList', 'Optional', [sts.number()], sts.array(() => v110.AccountId32)) as SessionCandidateListV110,
}

export interface SessionCandidateListV110  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v110.AccountId32[] | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v110.AccountId32[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v110.AccountId32[] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v110.AccountId32[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v110.AccountId32[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v110.AccountId32[] | undefined)][]>
}

export const currentValidators =  {
    v110: new StorageType('D9NodeVoting.CurrentValidators', 'Optional', [v110.AccountId32], v110.ValidatorStats) as CurrentValidatorsV110,
}

export interface CurrentValidatorsV110  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v110.AccountId32): Promise<(v110.ValidatorStats | undefined)>
    getMany(block: Block, keys: v110.AccountId32[]): Promise<(v110.ValidatorStats | undefined)[]>
    getKeys(block: Block): Promise<v110.AccountId32[]>
    getKeys(block: Block, key: v110.AccountId32): Promise<v110.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v110.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v110.AccountId32): AsyncIterable<v110.AccountId32[]>
    getPairs(block: Block): Promise<[k: v110.AccountId32, v: (v110.ValidatorStats | undefined)][]>
    getPairs(block: Block, key: v110.AccountId32): Promise<[k: v110.AccountId32, v: (v110.ValidatorStats | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v110.AccountId32, v: (v110.ValidatorStats | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v110.AccountId32): AsyncIterable<[k: v110.AccountId32, v: (v110.ValidatorStats | undefined)][]>
}
