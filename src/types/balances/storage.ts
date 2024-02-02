import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v110 from '../v110'

export const totalIssuance =  {
    /**
     *  The total units issued in the system.
     */
    v110: new StorageType('Balances.TotalIssuance', 'Default', [], sts.bigint()) as TotalIssuanceV110,
}

/**
 *  The total units issued in the system.
 */
export interface TotalIssuanceV110  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const inactiveIssuance =  {
    /**
     *  The total units of outstanding deactivated balance in the system.
     */
    v110: new StorageType('Balances.InactiveIssuance', 'Default', [], sts.bigint()) as InactiveIssuanceV110,
}

/**
 *  The total units of outstanding deactivated balance in the system.
 */
export interface InactiveIssuanceV110  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const account =  {
    /**
     *  The Balances pallet example of storing the balance of an account.
     * 
     *  # Example
     * 
     *  ```nocompile
     *   impl pallet_balances::Config for Runtime {
     *     type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
     *   }
     *  ```
     * 
     *  You can also store the balance of an account in the `System` pallet.
     * 
     *  # Example
     * 
     *  ```nocompile
     *   impl pallet_balances::Config for Runtime {
     *    type AccountStore = System
     *   }
     *  ```
     * 
     *  But this comes with tradeoffs, storing account balances in the system pallet stores
     *  `frame_system` data alongside the account data contrary to storing account balances in the
     *  `Balances` pallet, which uses a `StorageMap` to store balances data only.
     *  NOTE: This is only used in the case that this pallet is used to store balances.
     */
    v110: new StorageType('Balances.Account', 'Default', [v110.AccountId32], v110.AccountData) as AccountV110,
}

/**
 *  The Balances pallet example of storing the balance of an account.
 * 
 *  # Example
 * 
 *  ```nocompile
 *   impl pallet_balances::Config for Runtime {
 *     type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
 *   }
 *  ```
 * 
 *  You can also store the balance of an account in the `System` pallet.
 * 
 *  # Example
 * 
 *  ```nocompile
 *   impl pallet_balances::Config for Runtime {
 *    type AccountStore = System
 *   }
 *  ```
 * 
 *  But this comes with tradeoffs, storing account balances in the system pallet stores
 *  `frame_system` data alongside the account data contrary to storing account balances in the
 *  `Balances` pallet, which uses a `StorageMap` to store balances data only.
 *  NOTE: This is only used in the case that this pallet is used to store balances.
 */
export interface AccountV110  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v110.AccountData
    get(block: Block, key: v110.AccountId32): Promise<(v110.AccountData | undefined)>
    getMany(block: Block, keys: v110.AccountId32[]): Promise<(v110.AccountData | undefined)[]>
    getKeys(block: Block): Promise<v110.AccountId32[]>
    getKeys(block: Block, key: v110.AccountId32): Promise<v110.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v110.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v110.AccountId32): AsyncIterable<v110.AccountId32[]>
    getPairs(block: Block): Promise<[k: v110.AccountId32, v: (v110.AccountData | undefined)][]>
    getPairs(block: Block, key: v110.AccountId32): Promise<[k: v110.AccountId32, v: (v110.AccountData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v110.AccountId32, v: (v110.AccountData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v110.AccountId32): AsyncIterable<[k: v110.AccountId32, v: (v110.AccountData | undefined)][]>
}

export const locks =  {
    /**
     *  Any liquidity locks on some account balances.
     *  NOTE: Should only be accessed when setting, changing and freeing a lock.
     */
    v110: new StorageType('Balances.Locks', 'Default', [v110.AccountId32], sts.array(() => v110.BalanceLock)) as LocksV110,
}

/**
 *  Any liquidity locks on some account balances.
 *  NOTE: Should only be accessed when setting, changing and freeing a lock.
 */
export interface LocksV110  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v110.BalanceLock[]
    get(block: Block, key: v110.AccountId32): Promise<(v110.BalanceLock[] | undefined)>
    getMany(block: Block, keys: v110.AccountId32[]): Promise<(v110.BalanceLock[] | undefined)[]>
    getKeys(block: Block): Promise<v110.AccountId32[]>
    getKeys(block: Block, key: v110.AccountId32): Promise<v110.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v110.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v110.AccountId32): AsyncIterable<v110.AccountId32[]>
    getPairs(block: Block): Promise<[k: v110.AccountId32, v: (v110.BalanceLock[] | undefined)][]>
    getPairs(block: Block, key: v110.AccountId32): Promise<[k: v110.AccountId32, v: (v110.BalanceLock[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v110.AccountId32, v: (v110.BalanceLock[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v110.AccountId32): AsyncIterable<[k: v110.AccountId32, v: (v110.BalanceLock[] | undefined)][]>
}

export const reserves =  {
    /**
     *  Named reserves on some account balances.
     */
    v110: new StorageType('Balances.Reserves', 'Default', [v110.AccountId32], sts.array(() => v110.ReserveData)) as ReservesV110,
}

/**
 *  Named reserves on some account balances.
 */
export interface ReservesV110  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v110.ReserveData[]
    get(block: Block, key: v110.AccountId32): Promise<(v110.ReserveData[] | undefined)>
    getMany(block: Block, keys: v110.AccountId32[]): Promise<(v110.ReserveData[] | undefined)[]>
    getKeys(block: Block): Promise<v110.AccountId32[]>
    getKeys(block: Block, key: v110.AccountId32): Promise<v110.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v110.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v110.AccountId32): AsyncIterable<v110.AccountId32[]>
    getPairs(block: Block): Promise<[k: v110.AccountId32, v: (v110.ReserveData[] | undefined)][]>
    getPairs(block: Block, key: v110.AccountId32): Promise<[k: v110.AccountId32, v: (v110.ReserveData[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v110.AccountId32, v: (v110.ReserveData[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v110.AccountId32): AsyncIterable<[k: v110.AccountId32, v: (v110.ReserveData[] | undefined)][]>
}

export const holds =  {
    /**
     *  Holds on account balances.
     */
    v110: new StorageType('Balances.Holds', 'Default', [v110.AccountId32], sts.array(() => v110.IdAmount)) as HoldsV110,
}

/**
 *  Holds on account balances.
 */
export interface HoldsV110  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v110.IdAmount[]
    get(block: Block, key: v110.AccountId32): Promise<(v110.IdAmount[] | undefined)>
    getMany(block: Block, keys: v110.AccountId32[]): Promise<(v110.IdAmount[] | undefined)[]>
    getKeys(block: Block): Promise<v110.AccountId32[]>
    getKeys(block: Block, key: v110.AccountId32): Promise<v110.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v110.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v110.AccountId32): AsyncIterable<v110.AccountId32[]>
    getPairs(block: Block): Promise<[k: v110.AccountId32, v: (v110.IdAmount[] | undefined)][]>
    getPairs(block: Block, key: v110.AccountId32): Promise<[k: v110.AccountId32, v: (v110.IdAmount[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v110.AccountId32, v: (v110.IdAmount[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v110.AccountId32): AsyncIterable<[k: v110.AccountId32, v: (v110.IdAmount[] | undefined)][]>
}

export const freezes =  {
    /**
     *  Freeze locks on account balances.
     */
    v110: new StorageType('Balances.Freezes', 'Default', [v110.AccountId32], sts.array(() => v110.IdAmount)) as FreezesV110,
}

/**
 *  Freeze locks on account balances.
 */
export interface FreezesV110  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v110.IdAmount[]
    get(block: Block, key: v110.AccountId32): Promise<(v110.IdAmount[] | undefined)>
    getMany(block: Block, keys: v110.AccountId32[]): Promise<(v110.IdAmount[] | undefined)[]>
    getKeys(block: Block): Promise<v110.AccountId32[]>
    getKeys(block: Block, key: v110.AccountId32): Promise<v110.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v110.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v110.AccountId32): AsyncIterable<v110.AccountId32[]>
    getPairs(block: Block): Promise<[k: v110.AccountId32, v: (v110.IdAmount[] | undefined)][]>
    getPairs(block: Block, key: v110.AccountId32): Promise<[k: v110.AccountId32, v: (v110.IdAmount[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v110.AccountId32, v: (v110.IdAmount[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v110.AccountId32): AsyncIterable<[k: v110.AccountId32, v: (v110.IdAmount[] | undefined)][]>
}
