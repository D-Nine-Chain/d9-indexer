import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v112 from '../v112'
import * as v113 from '../v113'

export const usersVotingInterests =  {
    /**
     *  defines the voting power of a user
     */
    v112: new StorageType('D9NodeVoting.UsersVotingInterests', 'Optional', [v112.AccountId32], v112.VotingInterest) as UsersVotingInterestsV112,
}

/**
 *  defines the voting power of a user
 */
export interface UsersVotingInterestsV112  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v112.AccountId32): Promise<(v112.VotingInterest | undefined)>
    getMany(block: Block, keys: v112.AccountId32[]): Promise<(v112.VotingInterest | undefined)[]>
    getKeys(block: Block): Promise<v112.AccountId32[]>
    getKeys(block: Block, key: v112.AccountId32): Promise<v112.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v112.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v112.AccountId32): AsyncIterable<v112.AccountId32[]>
    getPairs(block: Block): Promise<[k: v112.AccountId32, v: (v112.VotingInterest | undefined)][]>
    getPairs(block: Block, key: v112.AccountId32): Promise<[k: v112.AccountId32, v: (v112.VotingInterest | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v112.AccountId32, v: (v112.VotingInterest | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v112.AccountId32): AsyncIterable<[k: v112.AccountId32, v: (v112.VotingInterest | undefined)][]>
}

export const userToNodeVotesTotals =  {
    /**
     *  defines the vote distribution of a user to some candidate
     * 
     *  user -> candidate -> votes
     *  UserToNodeVotesTotals == NodeToUserVotesTotals
     */
    v112: new StorageType('D9NodeVoting.UserToNodeVotesTotals', 'Default', [v112.AccountId32, v112.AccountId32], sts.bigint()) as UserToNodeVotesTotalsV112,
}

/**
 *  defines the vote distribution of a user to some candidate
 * 
 *  user -> candidate -> votes
 *  UserToNodeVotesTotals == NodeToUserVotesTotals
 */
export interface UserToNodeVotesTotalsV112  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block, key1: v112.AccountId32, key2: v112.AccountId32): Promise<(bigint | undefined)>
    getMany(block: Block, keys: [v112.AccountId32, v112.AccountId32][]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<[v112.AccountId32, v112.AccountId32][]>
    getKeys(block: Block, key1: v112.AccountId32): Promise<[v112.AccountId32, v112.AccountId32][]>
    getKeys(block: Block, key1: v112.AccountId32, key2: v112.AccountId32): Promise<[v112.AccountId32, v112.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v112.AccountId32, v112.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v112.AccountId32): AsyncIterable<[v112.AccountId32, v112.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v112.AccountId32, key2: v112.AccountId32): AsyncIterable<[v112.AccountId32, v112.AccountId32][]>
    getPairs(block: Block): Promise<[k: [v112.AccountId32, v112.AccountId32], v: (bigint | undefined)][]>
    getPairs(block: Block, key1: v112.AccountId32): Promise<[k: [v112.AccountId32, v112.AccountId32], v: (bigint | undefined)][]>
    getPairs(block: Block, key1: v112.AccountId32, key2: v112.AccountId32): Promise<[k: [v112.AccountId32, v112.AccountId32], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v112.AccountId32, v112.AccountId32], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v112.AccountId32): AsyncIterable<[k: [v112.AccountId32, v112.AccountId32], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v112.AccountId32, key2: v112.AccountId32): AsyncIterable<[k: [v112.AccountId32, v112.AccountId32], v: (bigint | undefined)][]>
}

export const nodeToUserVotesTotals =  {
    /**
     *  defines the supporters of a candidate
     * 
     *  candidate -> supporter -> votes
     *  UserToNodeVotesTotals == NodeToUserVotesTotals
     */
    v112: new StorageType('D9NodeVoting.NodeToUserVotesTotals', 'Default', [v112.AccountId32, v112.AccountId32], sts.bigint()) as NodeToUserVotesTotalsV112,
}

/**
 *  defines the supporters of a candidate
 * 
 *  candidate -> supporter -> votes
 *  UserToNodeVotesTotals == NodeToUserVotesTotals
 */
export interface NodeToUserVotesTotalsV112  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block, key1: v112.AccountId32, key2: v112.AccountId32): Promise<(bigint | undefined)>
    getMany(block: Block, keys: [v112.AccountId32, v112.AccountId32][]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<[v112.AccountId32, v112.AccountId32][]>
    getKeys(block: Block, key1: v112.AccountId32): Promise<[v112.AccountId32, v112.AccountId32][]>
    getKeys(block: Block, key1: v112.AccountId32, key2: v112.AccountId32): Promise<[v112.AccountId32, v112.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v112.AccountId32, v112.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v112.AccountId32): AsyncIterable<[v112.AccountId32, v112.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v112.AccountId32, key2: v112.AccountId32): AsyncIterable<[v112.AccountId32, v112.AccountId32][]>
    getPairs(block: Block): Promise<[k: [v112.AccountId32, v112.AccountId32], v: (bigint | undefined)][]>
    getPairs(block: Block, key1: v112.AccountId32): Promise<[k: [v112.AccountId32, v112.AccountId32], v: (bigint | undefined)][]>
    getPairs(block: Block, key1: v112.AccountId32, key2: v112.AccountId32): Promise<[k: [v112.AccountId32, v112.AccountId32], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v112.AccountId32, v112.AccountId32], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v112.AccountId32): AsyncIterable<[k: [v112.AccountId32, v112.AccountId32], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v112.AccountId32, key2: v112.AccountId32): AsyncIterable<[k: [v112.AccountId32, v112.AccountId32], v: (bigint | undefined)][]>
}

export const nodeAccumulativeVotes =  {
    /**
     *  grand total of votes for a candidate
     * 
     *  this Map can be no larger than MaxCandidates
     */
    v112: new StorageType('D9NodeVoting.NodeAccumulativeVotes', 'Optional', [v112.AccountId32], sts.bigint()) as NodeAccumulativeVotesV112,
}

/**
 *  grand total of votes for a candidate
 * 
 *  this Map can be no larger than MaxCandidates
 */
export interface NodeAccumulativeVotesV112  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v112.AccountId32): Promise<(bigint | undefined)>
    getMany(block: Block, keys: v112.AccountId32[]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<v112.AccountId32[]>
    getKeys(block: Block, key: v112.AccountId32): Promise<v112.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v112.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v112.AccountId32): AsyncIterable<v112.AccountId32[]>
    getPairs(block: Block): Promise<[k: v112.AccountId32, v: (bigint | undefined)][]>
    getPairs(block: Block, key: v112.AccountId32): Promise<[k: v112.AccountId32, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v112.AccountId32, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v112.AccountId32): AsyncIterable<[k: v112.AccountId32, v: (bigint | undefined)][]>
}

export const currentNumberOfCandidatesNodes =  {
    v112: new StorageType('D9NodeVoting.CurrentNumberOfCandidatesNodes', 'Default', [], sts.number()) as CurrentNumberOfCandidatesNodesV112,
}

export interface CurrentNumberOfCandidatesNodesV112  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const sessionNodeList =  {
    v112: new StorageType('D9NodeVoting.SessionNodeList', 'Optional', [sts.number()], sts.array(() => v112.AccountId32)) as SessionNodeListV112,
}

export interface SessionNodeListV112  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v112.AccountId32[] | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v112.AccountId32[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v112.AccountId32[] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v112.AccountId32[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v112.AccountId32[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v112.AccountId32[] | undefined)][]>
}

export const currentSessionIndex =  {
    v112: new StorageType('D9NodeVoting.CurrentSessionIndex', 'Default', [], sts.number()) as CurrentSessionIndexV112,
}

export interface CurrentSessionIndexV112  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const currentValidatorVoteStats =  {
    v112: new StorageType('D9NodeVoting.CurrentValidatorVoteStats', 'Optional', [v112.AccountId32], v112.ValidatorVoteStats) as CurrentValidatorVoteStatsV112,
}

export interface CurrentValidatorVoteStatsV112  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v112.AccountId32): Promise<(v112.ValidatorVoteStats | undefined)>
    getMany(block: Block, keys: v112.AccountId32[]): Promise<(v112.ValidatorVoteStats | undefined)[]>
    getKeys(block: Block): Promise<v112.AccountId32[]>
    getKeys(block: Block, key: v112.AccountId32): Promise<v112.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v112.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v112.AccountId32): AsyncIterable<v112.AccountId32[]>
    getPairs(block: Block): Promise<[k: v112.AccountId32, v: (v112.ValidatorVoteStats | undefined)][]>
    getPairs(block: Block, key: v112.AccountId32): Promise<[k: v112.AccountId32, v: (v112.ValidatorVoteStats | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v112.AccountId32, v: (v112.ValidatorVoteStats | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v112.AccountId32): AsyncIterable<[k: v112.AccountId32, v: (v112.ValidatorVoteStats | undefined)][]>
}

export const nodeMetadata =  {
    v112: new StorageType('D9NodeVoting.NodeMetadata', 'Optional', [v112.AccountId32], v112.NodeMetadataStruct) as NodeMetadataV112,
}

export interface NodeMetadataV112  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v112.AccountId32): Promise<(v112.NodeMetadataStruct | undefined)>
    getMany(block: Block, keys: v112.AccountId32[]): Promise<(v112.NodeMetadataStruct | undefined)[]>
    getKeys(block: Block): Promise<v112.AccountId32[]>
    getKeys(block: Block, key: v112.AccountId32): Promise<v112.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v112.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v112.AccountId32): AsyncIterable<v112.AccountId32[]>
    getPairs(block: Block): Promise<[k: v112.AccountId32, v: (v112.NodeMetadataStruct | undefined)][]>
    getPairs(block: Block, key: v112.AccountId32): Promise<[k: v112.AccountId32, v: (v112.NodeMetadataStruct | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v112.AccountId32, v: (v112.NodeMetadataStruct | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v112.AccountId32): AsyncIterable<[k: v112.AccountId32, v: (v112.NodeMetadataStruct | undefined)][]>
}

export const palletAdmin =  {
    v113: new StorageType('D9NodeVoting.PalletAdmin', 'Optional', [], v113.AccountId32) as PalletAdminV113,
}

export interface PalletAdminV113  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v113.AccountId32 | undefined)>
}
