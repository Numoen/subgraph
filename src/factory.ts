import { LendgineCreated as LendgineCreatedEvent } from './types/Factory/Factory'
import { Factory, Lendgine, Token } from './types/schema'
import { FACTORY_ADDRESS, ONE_BI, ZERO_BI } from './utils'

import { Lendgine as LendgineTemplate } from './types/templates'

export function handleLendgineCreated(event: LendgineCreatedEvent): void {
  let factory = Factory.load(FACTORY_ADDRESS)
  if (factory === null) {
    factory = new Factory(FACTORY_ADDRESS)
    factory.lendgineCount = ZERO_BI
    factory.txCount = ZERO_BI
  }

  const lendgine = new Lendgine(event.params.lendgine.toHexString())
  let token0 = Token.load(event.params.token0.toHexString())
  let token1 = Token.load(event.params.token1.toHexString())

  if (token0 === null) {
    token0 = new Token(event.params.token0.toHexString())
    token0.txCount = ZERO_BI
    token0.poolCount = ZERO_BI
  }

  if (token1 === null) {
    token1 = new Token(event.params.token1.toHexString())
    token1.txCount = ZERO_BI
    token1.poolCount = ZERO_BI
  }

  lendgine.token0 = event.params.token0.toHexString()
  lendgine.token1 = event.params.token1.toHexString()
  lendgine.token0Exp = event.params.token0Exp
  lendgine.token1Exp = event.params.token1Exp
  lendgine.upperBound = event.params.upperBound

  lendgine.totalPositionSize = ZERO_BI
  lendgine.totalLiquidityBorrowed = ZERO_BI
  lendgine.rewardPerPositionStored = ZERO_BI
  lendgine.lastUpdate = ZERO_BI
  lendgine.totalSupply = ZERO_BI
  lendgine.totalLiquidity = ZERO_BI
  lendgine.reserve0 = ZERO_BI
  lendgine.reserve1 = ZERO_BI

  lendgine.txCount = ZERO_BI

  factory.lendgineCount = factory.lendgineCount.plus(ONE_BI)
  factory.txCount = factory.txCount.plus(ONE_BI)

  token0.txCount = token0.txCount.plus(ONE_BI)
  token0.poolCount = token0.poolCount.plus(ONE_BI)
  token1.txCount = token1.txCount.plus(ONE_BI)
  token1.poolCount = token1.poolCount.plus(ONE_BI)

  token0.save()
  token1.save()
  lendgine.save()
  // create the tracked contract based on the template
  LendgineTemplate.create(event.params.lendgine)
  factory.save()
}
