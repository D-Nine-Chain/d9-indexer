import type { Option, Result, u128 } from '@polkadot/types'
import { BN, BN_ZERO } from '@polkadot/util/bn'
import { Balance } from "@polkadot/types/interfaces"
import { Contracts, d9Api } from "../d9-api"

export async function getAccountAssets(address: string) {
  const { D9USDT, D9MerchantMining, D9BurnMining, gasLimits } = Contracts
  const [{ data: accountInfo }, usdtBalance, greenPoints, mineBalance]
    = await Promise.all([
      d9Api.query.system.account(address),
      D9USDT.query['psp22::balanceOf'](
        address,
        {
          gasLimit: gasLimits.readLimit,
        },
        address,
      ).then(({ output }) => {
        const _output = output as Result<u128, any>

        return _output.asOk.toBn()
      }),
      D9MerchantMining.query
        .getAccount(
          address,
          {
            gasLimit: gasLimits.readLimit,
          },
          address,
        )
        .then(({ output }) => {
          const _output = output as Result<Option<any>, any>
          const gp = _output.asOk.value.greenPoints as u128

          return gp?.toBn() ?? BN_ZERO
        }),
      D9BurnMining.query
        .getAccount(
          address,
          {
            gasLimit: gasLimits.readLimit,
          },
          address,
        )
        .then(({ output }) => {
          const _output = output as Result<Option<any>, any>
          const balance = _output.asOk.value.balanceDue as Balance

          return balance
        }),
    ])

  return {
    d9Balance: new BN(
      accountInfo.free.add(accountInfo.reserved)?.toString() ?? '0',
    ),
    usdtBalance: new BN(usdtBalance?.toString() ?? '0'),
    greenPoints: new BN(greenPoints?.toString() ?? '0'),
    mineBalance: new BN(mineBalance?.toString() ?? '0'),
  }
}
