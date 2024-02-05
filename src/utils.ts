import * as ss58 from '@subsquid/ss58'
import { SS58 } from './constant'

export function ss58Encode(value: any): string {
  return SS58.encode(value)
}

export function isContractsEvent(event: { name: string, args: { contract: string } }, address: string) {
  return event.name === 'Contracts.ContractEmitted' && event.args.contract === address
}

export interface BaseEntity {
  id: string
  blockNumber: number
  timestamp: Date
  extrinsicHash: string | undefined
}
