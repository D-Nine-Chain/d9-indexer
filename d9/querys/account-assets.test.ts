import { describe, it, expect } from 'bun:test'
import { getAccountAssets } from './account-assets'
import { d9Api } from '../d9-api'

describe('getAccountAssets', () => {
  it('should return the correct assets for a given address', async () => {
    await d9Api.isReady

    const assets = await getAccountAssets('w3SKFij8fHcikjcn2rpVQYtpVbVWFb5H3qHju1KTRyVzvBo')
    expect(assets).toBeDefined()
  })
})
