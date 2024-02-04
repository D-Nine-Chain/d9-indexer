import * as ss58 from '@subsquid/ss58'

export function ss58Encode(value: any): string {
  return ss58.codec(9).encode(value)
}
