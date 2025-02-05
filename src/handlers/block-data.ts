import type { Store } from '@subsquid/typeorm-store'
import { Block, Event, Extrinsic, Account, Call } from '../model'
import type { ProcessorContext } from '../processor'
import { getAccount } from './account'
import { getApi } from '../helpers/api'
import { extractAuthor } from "@polkadot/api-derive/type/util"

export async function handleBlockData(ctx: ProcessorContext<Store>): Promise<void> {
  const api = await getApi()
  const validators = await api.query.session.validators()

  const blockDigests = await Promise.all(
    ctx.blocks
      .map(block => api.rpc.chain
        .getBlock(block.header.hash)
        .then(block => block.block.header.digest)
        .then(async digest => {
          const digestType = api.registry.createType(
            "Digest",
            digest,
            true
          );
          const author = extractAuthor(digestType as any, validators as any)?.toString()
          return [
            block.header.hash,
            author
              ? await getAccount(ctx, author, true)
              : undefined
          ] as const
        })
      )
  )

  for (const block of ctx.blocks) {
    const blockEntity = new Block({
      id: block.header.hash,
      number: block.header.height,
      timestamp: new Date(Number(block.header.timestamp)),
      hash: block.header.hash,
      parentHash: block.header.parentHash,
      stateRoot: block.header.stateRoot,
      extrinsicsRoot: block.header.extrinsicsRoot,
      specVersion: block.header.specVersion,
      specName: block.header.specName,
      implName: block.header.implName,
      implVersion: block.header.implVersion,
      validator: blockDigests.find(digest => digest[0] === block.header.hash)?.[1]
    })

    await ctx.store.save(blockEntity)

    for (let idx = 0; idx < block.extrinsics.length; idx++) {
      const extrinsic = block.extrinsics[idx]

      if (!extrinsic.success) continue;

      let signer: Account | null = null
      const call = extrinsic.call

      if (call?.origin) {
        signer = await getAccount(ctx, call.origin.value.value)
      }

      const extrinsicObj = new Extrinsic({
        id: `${block.header.height}-${idx}`,
        block: blockEntity,
        index: idx,
        hash: extrinsic.hash,
        module: call?.name.split('.')[0],
        call: call?.name.split('.')[1],
        parameters: call?.args ?? {},
        success: true,
        signer
      })

      await ctx.store.save(extrinsicObj)

      if (call) {
        const callEntity = new Call({
          id: `${block.header.height}-${extrinsic.index}-${idx}`,
          block: blockEntity,
          extrinsic: extrinsicObj,
          index: idx,
          timestamp: new Date(Number(block.header.timestamp)),
          method: call.name.split('.')[1],
          call: call.name,
          parameters: call.args ?? {}
        })
        await ctx.store.save(callEntity)
      }

      for (let idx = 0; idx < extrinsic.events.length; idx++) {
        const event = extrinsic.events[idx]

        const eventEntity = new Event({
          id: `${block.header.height}-${idx}`,
          block: blockEntity,
          extrinsic: extrinsicObj,
          index: idx,
          module: event.name.split('.')[0],
          name: event.name.split('.')[1],
          attributes: event.args ?? {},
          timestamp: new Date(Number(block.header.timestamp))
        })

        await ctx.store.save(eventEntity)
      }
    }
  }
}
