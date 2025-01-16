import type { Store } from '@subsquid/typeorm-store'
import { Block, Event, Extrinsic, Account, Call } from '../model'
import type { ProcessorContext } from '../processor'
import { getAccount } from './account'

export async function handleBlockData(ctx: ProcessorContext<Store>): Promise<void> {
  for (const block of ctx.blocks) {
    // 创建区块实体
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
      validator: undefined // 需要从其他地方获取验证人信息
    })

    await ctx.store.save(blockEntity)

    // 处理外部调用
    for (let idx = 0; idx < block.calls.length; idx++) {
      const call = block.calls[idx]
      let signer: Account | null = null
      
      if (call.origin) {
        signer = await getAccount(ctx, call.origin.value.value)
      }

      const extrinsic = new Extrinsic({
        id: `${block.header.hash}-${idx}`,
        block: blockEntity,
        index: idx,
        hash: block.header.hash + '-' + idx,
        module: call.name.split('.')[0],
        call: call.name.split('.')[1],
        parameters: call.args ?? {},
        success: true,
        signer
      })
      await ctx.store.save(extrinsic)

      // 处理调用
      const callEntity = new Call({
        id: `${block.header.hash}-${idx}`,
        block: blockEntity,
        extrinsic: extrinsic,
        index: idx,
        timestamp: new Date(Number(block.header.timestamp)),
        method: call.name.split('.')[1],
        call: call.name,
        parameters: call.args ?? {}
      })
      await ctx.store.save(callEntity)
    }

    // 处理事件
    for (let idx = 0; idx < block.events.length; idx++) {
      const event = block.events[idx]
      let extrinsicRef: Extrinsic | null = null
      
      if (event.call) {
        const foundExtrinsic = await ctx.store.get(Extrinsic, `${block.header.hash}-${event.call.extrinsicIndex}`)
        if (foundExtrinsic) {
          extrinsicRef = foundExtrinsic
        }
      }

      const eventEntity = new Event({
        id: `${block.header.hash}-${idx}`,
        block: blockEntity,
        extrinsic: extrinsicRef,
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
