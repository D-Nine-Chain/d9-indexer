import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v112 from '../v112'

export const totalIssuance =  {
    /**
     *  The total units issued in the system.
     */
    v112: new StorageType('Balances.TotalIssuance', 'Default', [], sts.bigint()) as TotalIssuanceV112,
}

/**
 *  The total units issued in the system.
 */
export interface TotalIssuanceV112  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const inactiveIssuance =  {
    /**
     *  The total units of outstanding deactivated balance in the system.
     */
    v112: new StorageType('Balances.InactiveIssuance', 'Default', [], sts.bigint()) as InactiveIssuanceV112,
}

/**
 *  The total units of outstanding deactivated balance in the system.
 */
export interface InactiveIssuanceV112  {
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
    v112: new StorageType('Balances.Account', 'Default', [v112.AccountId32], v112.AccountData) as AccountV112,
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
export interface AccountV112  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v112.AccountData
    get(block: Block, key: v112.AccountId32): Promise<(v112.AccountData | undefined)>
    getMany(block: Block, keys: v112.AccountId32[]): Promise<(v112.AccountData | undefined)[]>
    getKeys(block: Block): Promise<v112.AccountId32[]>
    getKeys(block: Block, key: v112.AccountId32): Promise<v112.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v112.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v112.AccountId32): AsyncIterable<v112.AccountId32[]>
    getPairs(block: Block): Promise<[k: v112.AccountId32, v: (v112.AccountData | undefined)][]>
    getPairs(block: Block, key: v112.AccountId32): Promise<[k: v112.AccountId32, v: (v112.AccountData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v112.AccountId32, v: (v112.AccountData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v112.AccountId32): AsyncIterable<[k: v112.AccountId32, v: (v112.AccountData | undefined)][]>
}

export const locks =  {
    /**
     *  Any liquidity locks on some account balances.
     *  NOTE: Should only be accessed when setting, changing and freeing a lock.
     */
    v112: new StorageType('Balances.Locks', 'Default', [v112.AccountId32], sts.array(() => v112.BalanceLock)) as LocksV112,
}

/**
 *  Any liquidity locks on some account balances.
 *  NOTE: Should only be accessed when setting, changing and freeing a lock.
 */
export interface LocksV112  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v112.BalanceLock[]
    get(block: Block, key: v112.AccountId32): Promise<(v112.BalanceLock[] | undefined)>
    getMany(block: Block, keys: v112.AccountId32[]): Promise<(v112.BalanceLock[] | undefined)[]>
    getKeys(block: Block): Promise<v112.AccountId32[]>
    getKeys(block: Block, key: v112.AccountId32): Promise<v112.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v112.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v112.AccountId32): AsyncIterable<v112.AccountId32[]>
    getPairs(block: Block): Promise<[k: v112.AccountId32, v: (v112.BalanceLock[] | undefined)][]>
    getPairs(block: Block, key: v112.AccountId32): Promise<[k: v112.AccountId32, v: (v112.BalanceLock[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v112.AccountId32, v: (v112.BalanceLock[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v112.AccountId32): AsyncIterable<[k: v112.AccountId32, v: (v112.BalanceLock[] | undefined)][]>
}

export const reserves =  {
    /**
     *  Named reserves on some account balances.
     */
    v112: new StorageType('Balances.Reserves', 'Default', [v112.AccountId32], sts.array(() => v112.ReserveData)) as ReservesV112,
}

/**
 *  Named reserves on some account balances.
 */
export interface ReservesV112  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v112.ReserveData[]
    get(block: Block, key: v112.AccountId32): Promise<(v112.ReserveData[] | undefined)>
    getMany(block: Block, keys: v112.AccountId32[]): Promise<(v112.ReserveData[] | undefined)[]>
    getKeys(block: Block): Promise<v112.AccountId32[]>
    getKeys(block: Block, key: v112.AccountId32): Promise<v112.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v112.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v112.AccountId32): AsyncIterable<v112.AccountId32[]>
    getPairs(block: Block): Promise<[k: v112.AccountId32, v: (v112.ReserveData[] | undefined)][]>
    getPairs(block: Block, key: v112.AccountId32): Promise<[k: v112.AccountId32, v: (v112.ReserveData[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v112.AccountId32, v: (v112.ReserveData[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v112.AccountId32): AsyncIterable<[k: v112.AccountId32, v: (v112.ReserveData[] | undefined)][]>
}

export const holds =  {
    /**
     *  Holds on account balances.
     */
    v112: new StorageType('Balances.Holds', 'Default', [v112.AccountId32], sts.array(() => v112.IdAmount)) as HoldsV112,
}

/**
 *  Holds on account balances.
 */
export interface HoldsV112  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v112.IdAmount[]
    get(block: Block, key: v112.AccountId32): Promise<(v112.IdAmount[] | undefined)>
    getMany(block: Block, keys: v112.AccountId32[]): Promise<(v112.IdAmount[] | undefined)[]>
    getKeys(block: Block): Promise<v112.AccountId32[]>
    getKeys(block: Block, key: v112.AccountId32): Promise<v112.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v112.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v112.AccountId32): AsyncIterable<v112.AccountId32[]>
    getPairs(block: Block): Promise<[k: v112.AccountId32, v: (v112.IdAmount[] | undefined)][]>
    getPairs(block: Block, key: v112.AccountId32): Promise<[k: v112.AccountId32, v: (v112.IdAmount[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v112.AccountId32, v: (v112.IdAmount[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v112.AccountId32): AsyncIterable<[k: v112.AccountId32, v: (v112.IdAmount[] | undefined)][]>
}

export const freezes =  {
    /**
     *  Freeze locks on account balances.
     */
    v112: new StorageType('Balances.Freezes', 'Default', [v112.AccountId32], sts.array(() => v112.IdAmount)) as FreezesV112,
}

/**
 *  Freeze locks on account balances.
 */
export interface FreezesV112  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v112.IdAmount[]
    get(block: Block, key: v112.AccountId32): Promise<(v112.IdAmount[] | undefined)>
    getMany(block: Block, keys: v112.AccountId32[]): Promise<(v112.IdAmount[] | undefined)[]>
    getKeys(block: Block): Promise<v112.AccountId32[]>
    getKeys(block: Block, key: v112.AccountId32): Promise<v112.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v112.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v112.AccountId32): AsyncIterable<v112.AccountId32[]>
    getPairs(block: Block): Promise<[k: v112.AccountId32, v: (v112.IdAmount[] | undefined)][]>
    getPairs(block: Block, key: v112.AccountId32): Promise<[k: v112.AccountId32, v: (v112.IdAmount[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v112.AccountId32, v: (v112.IdAmount[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v112.AccountId32): AsyncIterable<[k: v112.AccountId32, v: (v112.IdAmount[] | undefined)][]>
}
