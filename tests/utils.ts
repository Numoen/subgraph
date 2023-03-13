import { newMockEvent } from 'matchstick-as'
import { LendgineCreated } from '../src/types/Factory/Factory'
import {
  Burn,
  Mint,
  Deposit,
  Withdraw,
  AccrueInterest,
  AccruePositionInterest,
  Collect,
} from '../src/types/templates/Lendgine/Lendgine'
import { Burn as PairBurn, Mint as PairMint, Swap } from '../src/types/templates/Lendgine/Pair'
import { Address, BigInt, ethereum } from '@graphprotocol/graph-ts'

export const LendgineEntityType = 'Lendgine'
export const FactoryEntityType = 'Factory'
export const TokenEntityType = 'Token'
export const MintEntityType = 'Mint'
export const BurnEntityType = 'Burn'
export const DepositEntityType = 'Deposit'
export const WithdrawEntityType = 'Withdraw'
export const PairMintEntityType = 'PairMint'
export const PairBurnEntityType = 'PairBurn'
export const SwapEntityType = 'Swap'
export const AccrueInterestEntityType = 'AccrueInterest'
export const AccruePositionInterestEntityType = 'AccruePositionInterest'
export const CollectEntityType = 'Collect'

export const AddressOne = Address.fromString('0x0000000000000000000000000000000000000001')
export const AddressTwo = Address.fromString('0x0000000000000000000000000000000000000002')
export const AddressThree = Address.fromString('0x0000000000000000000000000000000000000003')
export const AddressFour = Address.fromString('0x0000000000000000000000000000000000000004')

export function createLendgineCreatedEvent(
  token0: Address,
  token1: Address,
  // eslint-disable-next-line @typescript-eslint/ban-types
  token0Exp: BigInt,
  // eslint-disable-next-line @typescript-eslint/ban-types
  token1Exp: BigInt,
  // eslint-disable-next-line @typescript-eslint/ban-types
  upperBound: BigInt,
  lendgine: Address
): LendgineCreated {
  const lendgineCreatedEvent = changetype<LendgineCreated>(newMockEvent())
  lendgineCreatedEvent.parameters = []

  const token0Param = new ethereum.EventParam('token0', ethereum.Value.fromAddress(token0))
  const token1Param = new ethereum.EventParam('token1', ethereum.Value.fromAddress(token1))
  const token0ExpParam = new ethereum.EventParam('token0Exp', ethereum.Value.fromUnsignedBigInt(token0Exp))
  const token1ExpParam = new ethereum.EventParam('token1Exp', ethereum.Value.fromUnsignedBigInt(token1Exp))
  const upperBoundParam = new ethereum.EventParam('upperBound', ethereum.Value.fromUnsignedBigInt(upperBound))
  const lendgineParam = new ethereum.EventParam('lendgine', ethereum.Value.fromAddress(lendgine))

  lendgineCreatedEvent.parameters.push(token0Param)
  lendgineCreatedEvent.parameters.push(token1Param)
  lendgineCreatedEvent.parameters.push(token0ExpParam)
  lendgineCreatedEvent.parameters.push(token1ExpParam)
  lendgineCreatedEvent.parameters.push(upperBoundParam)
  lendgineCreatedEvent.parameters.push(lendgineParam)

  return lendgineCreatedEvent
}

export function createMintEvent(
  sender: Address,
  // eslint-disable-next-line @typescript-eslint/ban-types
  collateral: BigInt,
  // eslint-disable-next-line @typescript-eslint/ban-types
  liquidity: BigInt,
  // eslint-disable-next-line @typescript-eslint/ban-types
  shares: BigInt,
  to: Address
): Mint {
  const mintEvent = changetype<Mint>(newMockEvent())
  mintEvent.parameters = []

  const senderParam = new ethereum.EventParam('sender', ethereum.Value.fromAddress(sender))
  const collateralParam = new ethereum.EventParam('collateral', ethereum.Value.fromUnsignedBigInt(collateral))
  const sharesParam = new ethereum.EventParam('shares', ethereum.Value.fromUnsignedBigInt(shares))
  const liquidityParam = new ethereum.EventParam('liquidity', ethereum.Value.fromUnsignedBigInt(liquidity))
  const toParams = new ethereum.EventParam('sender', ethereum.Value.fromAddress(to))

  mintEvent.parameters.push(senderParam)
  mintEvent.parameters.push(collateralParam)
  mintEvent.parameters.push(sharesParam)
  mintEvent.parameters.push(liquidityParam)
  mintEvent.parameters.push(toParams)

  return mintEvent
}

export function createBurnEvent(
  sender: Address,
  // eslint-disable-next-line @typescript-eslint/ban-types
  collateral: BigInt,
  // eslint-disable-next-line @typescript-eslint/ban-types
  liquidity: BigInt,
  // eslint-disable-next-line @typescript-eslint/ban-types
  shares: BigInt,
  to: Address
): Burn {
  const burnEvent = changetype<Burn>(newMockEvent())
  burnEvent.parameters = []

  const senderParam = new ethereum.EventParam('sender', ethereum.Value.fromAddress(sender))
  const collateralParam = new ethereum.EventParam('collateral', ethereum.Value.fromUnsignedBigInt(collateral))
  const sharesParam = new ethereum.EventParam('shares', ethereum.Value.fromUnsignedBigInt(shares))
  const liquidityParam = new ethereum.EventParam('liquidity', ethereum.Value.fromUnsignedBigInt(liquidity))
  const toParams = new ethereum.EventParam('sender', ethereum.Value.fromAddress(to))

  burnEvent.parameters.push(senderParam)
  burnEvent.parameters.push(collateralParam)
  burnEvent.parameters.push(sharesParam)
  burnEvent.parameters.push(liquidityParam)
  burnEvent.parameters.push(toParams)

  return burnEvent
}

export function createDepositEvent(
  sender: Address,
  // eslint-disable-next-line @typescript-eslint/ban-types
  size: BigInt,
  // eslint-disable-next-line @typescript-eslint/ban-types
  liquidity: BigInt,
  to: Address
): Deposit {
  const depositEvent = changetype<Deposit>(newMockEvent())
  depositEvent.parameters = []

  const senderParam = new ethereum.EventParam('sender', ethereum.Value.fromAddress(sender))
  const sizeParam = new ethereum.EventParam('size', ethereum.Value.fromUnsignedBigInt(size))
  const liquidityParam = new ethereum.EventParam('liquidity', ethereum.Value.fromUnsignedBigInt(liquidity))
  const toParams = new ethereum.EventParam('sender', ethereum.Value.fromAddress(to))

  depositEvent.parameters.push(senderParam)
  depositEvent.parameters.push(sizeParam)
  depositEvent.parameters.push(liquidityParam)
  depositEvent.parameters.push(toParams)

  return depositEvent
}

export function createWithdrawEvent(
  sender: Address,
  // eslint-disable-next-line @typescript-eslint/ban-types
  size: BigInt,
  // eslint-disable-next-line @typescript-eslint/ban-types
  liquidity: BigInt,
  to: Address
): Withdraw {
  const withdrawEvent = changetype<Withdraw>(newMockEvent())
  withdrawEvent.parameters = []

  const senderParam = new ethereum.EventParam('sender', ethereum.Value.fromAddress(sender))
  const sizeParam = new ethereum.EventParam('size', ethereum.Value.fromUnsignedBigInt(size))
  const liquidityParam = new ethereum.EventParam('liquidity', ethereum.Value.fromUnsignedBigInt(liquidity))
  const toParams = new ethereum.EventParam('sender', ethereum.Value.fromAddress(to))

  withdrawEvent.parameters.push(senderParam)
  withdrawEvent.parameters.push(sizeParam)
  withdrawEvent.parameters.push(liquidityParam)
  withdrawEvent.parameters.push(toParams)

  return withdrawEvent
}

export function createPairMintEvent(
  // eslint-disable-next-line @typescript-eslint/ban-types
  amount0In: BigInt,
  // eslint-disable-next-line @typescript-eslint/ban-types
  amount1In: BigInt,
  // eslint-disable-next-line @typescript-eslint/ban-types
  liquidity: BigInt
): PairMint {
  const mintEvent = changetype<PairMint>(newMockEvent())
  mintEvent.parameters = []

  const amount0Param = new ethereum.EventParam('amount0In', ethereum.Value.fromUnsignedBigInt(amount0In))
  const amount1Param = new ethereum.EventParam('amount1In', ethereum.Value.fromUnsignedBigInt(amount1In))
  const liquidityParam = new ethereum.EventParam('liquidity', ethereum.Value.fromUnsignedBigInt(liquidity))

  mintEvent.parameters.push(amount0Param)
  mintEvent.parameters.push(amount1Param)
  mintEvent.parameters.push(liquidityParam)

  return mintEvent
}

export function createPairBurnEvent(
  // eslint-disable-next-line @typescript-eslint/ban-types
  amount0Out: BigInt,
  // eslint-disable-next-line @typescript-eslint/ban-types
  amount1Out: BigInt,
  // eslint-disable-next-line @typescript-eslint/ban-types
  liquidity: BigInt,
  to: Address
): PairBurn {
  const burnEvent = changetype<PairBurn>(newMockEvent())
  burnEvent.parameters = []

  const amount0Param = new ethereum.EventParam('amount0Out', ethereum.Value.fromUnsignedBigInt(amount0Out))
  const amount1Param = new ethereum.EventParam('amount1Out', ethereum.Value.fromUnsignedBigInt(amount1Out))
  const liquidityParam = new ethereum.EventParam('liquidity', ethereum.Value.fromUnsignedBigInt(liquidity))
  const toParam = new ethereum.EventParam('to', ethereum.Value.fromAddress(to))

  burnEvent.parameters.push(amount0Param)
  burnEvent.parameters.push(amount1Param)
  burnEvent.parameters.push(liquidityParam)
  burnEvent.parameters.push(toParam)

  return burnEvent
}

export function createSwapEvent(
  // eslint-disable-next-line @typescript-eslint/ban-types
  amount0Out: BigInt,
  // eslint-disable-next-line @typescript-eslint/ban-types
  amount1Out: BigInt,
  // eslint-disable-next-line @typescript-eslint/ban-types
  amount0In: BigInt,
  // eslint-disable-next-line @typescript-eslint/ban-types
  amount1In: BigInt,

  to: Address
): Swap {
  const swapEvent = changetype<Swap>(newMockEvent())
  swapEvent.parameters = []

  const amount0OutParam = new ethereum.EventParam('amount0Out', ethereum.Value.fromUnsignedBigInt(amount0Out))
  const amount1OutParam = new ethereum.EventParam('amount1Out', ethereum.Value.fromUnsignedBigInt(amount1Out))
  const amount0InParam = new ethereum.EventParam('amount0In', ethereum.Value.fromUnsignedBigInt(amount0In))
  const amount1InParam = new ethereum.EventParam('amount1In', ethereum.Value.fromUnsignedBigInt(amount1In))
  const toParam = new ethereum.EventParam('to', ethereum.Value.fromAddress(to))

  swapEvent.parameters.push(amount0OutParam)
  swapEvent.parameters.push(amount1OutParam)
  swapEvent.parameters.push(amount0InParam)
  swapEvent.parameters.push(amount1InParam)
  swapEvent.parameters.push(toParam)

  return swapEvent
}

export function createAccrueInterestEvent(
  // eslint-disable-next-line @typescript-eslint/ban-types
  timeElapsed: BigInt,
  // eslint-disable-next-line @typescript-eslint/ban-types
  collateral: BigInt,
  // eslint-disable-next-line @typescript-eslint/ban-types
  liquidity: BigInt
): AccrueInterest {
  const accrueInterestEvent = changetype<AccrueInterest>(newMockEvent())
  accrueInterestEvent.parameters = []

  const timeElapsedParam = new ethereum.EventParam('timeElapsed', ethereum.Value.fromUnsignedBigInt(timeElapsed))
  const collateralParam = new ethereum.EventParam('collateral', ethereum.Value.fromUnsignedBigInt(collateral))
  const liquidityParam = new ethereum.EventParam('liquidity', ethereum.Value.fromUnsignedBigInt(liquidity))

  accrueInterestEvent.parameters.push(timeElapsedParam)
  accrueInterestEvent.parameters.push(collateralParam)
  accrueInterestEvent.parameters.push(liquidityParam)

  return accrueInterestEvent
}

export function createAccruePositionInterestEvent(
  owner: Address,
  // eslint-disable-next-line @typescript-eslint/ban-types
  rewardPerPosition: BigInt
): AccruePositionInterest {
  const accruePositionInterestEvent = changetype<AccruePositionInterest>(newMockEvent())
  accruePositionInterestEvent.parameters = []

  const ownerParam = new ethereum.EventParam('owner', ethereum.Value.fromAddress(owner))
  const rewardPerPositionParam = new ethereum.EventParam(
    'rewardPerPosition',
    ethereum.Value.fromUnsignedBigInt(rewardPerPosition)
  )

  accruePositionInterestEvent.parameters.push(ownerParam)
  accruePositionInterestEvent.parameters.push(rewardPerPositionParam)

  return accruePositionInterestEvent
}

export function createCollectEvent(
  owner: Address,
  to: Address,
  // eslint-disable-next-line @typescript-eslint/ban-types
  amount: BigInt
): Collect {
  const collectEvent = changetype<Collect>(newMockEvent())
  collectEvent.parameters = []

  const ownerParam = new ethereum.EventParam('owner', ethereum.Value.fromAddress(owner))
  const toParam = new ethereum.EventParam('to', ethereum.Value.fromAddress(to))

  const amountParam = new ethereum.EventParam('amount', ethereum.Value.fromUnsignedBigInt(amount))

  collectEvent.parameters.push(ownerParam)
  collectEvent.parameters.push(toParam)
  collectEvent.parameters.push(amountParam)

  return collectEvent
}
