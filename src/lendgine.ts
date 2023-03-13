import { log } from '@graphprotocol/graph-ts'
import {
  Mint as MintEvent,
  Burn as BurnEvent,
  Deposit as DepositEvent,
  Withdraw as WithdrawEvent,
  AccrueInterest as AccrueInterestEvent,
  AccruePositionInterest as AccruePositionInterestEvent,
  Collect as CollectEvent,
} from './types/templates/Lendgine/Lendgine'
import { Mint as PairMintEvent, Burn as PairBurnEvent, Swap as SwapEvent } from './types/templates/Lendgine/Pair'
import {
  Burn,
  Factory,
  Lendgine,
  Mint,
  Token,
  Deposit,
  Withdraw,
  PairMint,
  PairBurn,
  Swap,
  AccrueInterest,
  AccruePositionInterest,
  Collect,
} from './types/schema'
import { FACTORY_ADDRESS, loadTransaction, ONE_BI } from './utils'

export function handleMint(event: MintEvent): void {
  const lendgineAddress = event.address.toHexString()
  const lendgine = Lendgine.load(lendgineAddress)
  const factory = Factory.load(FACTORY_ADDRESS)

  if (!lendgine || !factory) {
    log.error('factory or lendgine not found', [lendgineAddress, FACTORY_ADDRESS])
    return
  }
  const token0 = Token.load(lendgine.token0)
  const token1 = Token.load(lendgine.token1)

  if (!token0 || !token1) {
    log.error('token0 or token1 not found', [lendgine.token0, lendgine.token1])
    return
  }

  // update globals
  factory.txCount = factory.txCount.plus(ONE_BI)
  lendgine.txCount = lendgine.txCount.plus(ONE_BI)

  // update token0 data
  token0.txCount = token0.txCount.plus(ONE_BI)

  // update token1 data
  token1.txCount = token1.txCount.plus(ONE_BI)

  const transaction = loadTransaction(event)

  const mint = new Mint(transaction.id.toString() + '#' + lendgine.txCount.toString())
  mint.transaction = transaction.id
  mint.lendgine = lendgine.id

  mint.sender = event.params.sender
  mint.recipient = event.params.to

  mint.collateral = event.params.collateral
  mint.liquidity = event.params.liquidity
  mint.shares = event.params.shares

  mint.logIndex = event.logIndex

  token0.save()
  token1.save()
  lendgine.save()
  factory.save()
  mint.save()
}

export function handleBurn(event: BurnEvent): void {
  const lendgineAddress = event.address.toHexString()
  const lendgine = Lendgine.load(lendgineAddress)
  const factory = Factory.load(FACTORY_ADDRESS)

  if (!lendgine || !factory) {
    log.error('factory or lendgine not found', [lendgineAddress, FACTORY_ADDRESS])
    return
  }
  const token0 = Token.load(lendgine.token0)
  const token1 = Token.load(lendgine.token1)

  if (!token0 || !token1) {
    log.error('token0 or token1 not found', [lendgine.token0, lendgine.token1])
    return
  }

  // update globals
  factory.txCount = factory.txCount.plus(ONE_BI)
  lendgine.txCount = lendgine.txCount.plus(ONE_BI)

  // update token0 data
  token0.txCount = token0.txCount.plus(ONE_BI)

  // update token1 data
  token1.txCount = token1.txCount.plus(ONE_BI)

  const transaction = loadTransaction(event)

  const burn = new Burn(transaction.id.toString() + '#' + lendgine.txCount.toString())
  burn.transaction = transaction.id
  burn.lendgine = lendgine.id

  burn.sender = event.params.sender
  burn.recipient = event.params.to

  burn.collateral = event.params.collateral
  burn.liquidity = event.params.liquidity
  burn.shares = event.params.shares

  burn.logIndex = event.logIndex

  token0.save()
  token1.save()
  lendgine.save()
  factory.save()
  burn.save()
}

export function handleDeposit(event: DepositEvent): void {
  const lendgineAddress = event.address.toHexString()
  const lendgine = Lendgine.load(lendgineAddress)
  const factory = Factory.load(FACTORY_ADDRESS)

  if (!lendgine || !factory) {
    log.error('factory or lendgine not found', [lendgineAddress, FACTORY_ADDRESS])
    return
  }
  const token0 = Token.load(lendgine.token0)
  const token1 = Token.load(lendgine.token1)

  if (!token0 || !token1) {
    log.error('token0 or token1 not found', [lendgine.token0, lendgine.token1])
    return
  }

  // update globals
  factory.txCount = factory.txCount.plus(ONE_BI)
  lendgine.txCount = lendgine.txCount.plus(ONE_BI)

  // update token0 data
  token0.txCount = token0.txCount.plus(ONE_BI)

  // update token1 data
  token1.txCount = token1.txCount.plus(ONE_BI)

  const transaction = loadTransaction(event)

  const deposit = new Deposit(transaction.id.toString() + '#' + lendgine.txCount.toString())
  deposit.transaction = transaction.id
  deposit.lendgine = lendgine.id

  deposit.sender = event.params.sender
  deposit.recipient = event.params.to

  deposit.size = event.params.size
  deposit.liquidity = event.params.liquidity

  deposit.logIndex = event.logIndex

  token0.save()
  token1.save()
  lendgine.save()
  factory.save()
  deposit.save()
}

export function handleWithdraw(event: WithdrawEvent): void {
  const lendgineAddress = event.address.toHexString()
  const lendgine = Lendgine.load(lendgineAddress)
  const factory = Factory.load(FACTORY_ADDRESS)

  if (!lendgine || !factory) {
    log.error('factory or lendgine not found', [lendgineAddress, FACTORY_ADDRESS])
    return
  }
  const token0 = Token.load(lendgine.token0)
  const token1 = Token.load(lendgine.token1)

  if (!token0 || !token1) {
    log.error('token0 or token1 not found', [lendgine.token0, lendgine.token1])
    return
  }

  // update globals
  factory.txCount = factory.txCount.plus(ONE_BI)
  lendgine.txCount = lendgine.txCount.plus(ONE_BI)

  // update token0 data
  token0.txCount = token0.txCount.plus(ONE_BI)

  // update token1 data
  token1.txCount = token1.txCount.plus(ONE_BI)

  const transaction = loadTransaction(event)

  const withdraw = new Withdraw(transaction.id.toString() + '#' + lendgine.txCount.toString())
  withdraw.transaction = transaction.id
  withdraw.lendgine = lendgine.id

  withdraw.sender = event.params.sender
  withdraw.recipient = event.params.to

  withdraw.size = event.params.size
  withdraw.liquidity = event.params.liquidity

  withdraw.logIndex = event.logIndex

  token0.save()
  token1.save()
  lendgine.save()
  factory.save()
  withdraw.save()
}

export function handlePairMint(event: PairMintEvent): void {
  const lendgineAddress = event.address.toHexString()
  const lendgine = Lendgine.load(lendgineAddress)
  const factory = Factory.load(FACTORY_ADDRESS)

  if (!lendgine || !factory) {
    log.error('factory or lendgine not found', [lendgineAddress, FACTORY_ADDRESS])
    return
  }
  const token0 = Token.load(lendgine.token0)
  const token1 = Token.load(lendgine.token1)

  if (!token0 || !token1) {
    log.error('token0 or token1 not found', [lendgine.token0, lendgine.token1])
    return
  }

  // update globals
  factory.txCount = factory.txCount.plus(ONE_BI)
  lendgine.txCount = lendgine.txCount.plus(ONE_BI)

  // update token0 data
  token0.txCount = token0.txCount.plus(ONE_BI)

  // update token1 data
  token1.txCount = token1.txCount.plus(ONE_BI)

  const transaction = loadTransaction(event)

  const mint = new PairMint(transaction.id.toString() + '#' + lendgine.txCount.toString())
  mint.transaction = transaction.id
  mint.lendgine = lendgine.id

  mint.amount0 = event.params.amount0In
  mint.amount1 = event.params.amount1In
  mint.liquidity = event.params.liquidity

  mint.logIndex = event.logIndex

  token0.save()
  token1.save()
  lendgine.save()
  factory.save()
  mint.save()
}

export function handlePairBurn(event: PairBurnEvent): void {
  const lendgineAddress = event.address.toHexString()
  const lendgine = Lendgine.load(lendgineAddress)
  const factory = Factory.load(FACTORY_ADDRESS)

  if (!lendgine || !factory) {
    log.error('factory or lendgine not found', [lendgineAddress, FACTORY_ADDRESS])
    return
  }
  const token0 = Token.load(lendgine.token0)
  const token1 = Token.load(lendgine.token1)

  if (!token0 || !token1) {
    log.error('token0 or token1 not found', [lendgine.token0, lendgine.token1])
    return
  }

  // update globals
  factory.txCount = factory.txCount.plus(ONE_BI)
  lendgine.txCount = lendgine.txCount.plus(ONE_BI)

  // update token0 data
  token0.txCount = token0.txCount.plus(ONE_BI)

  // update token1 data
  token1.txCount = token1.txCount.plus(ONE_BI)

  const transaction = loadTransaction(event)

  const burn = new PairBurn(transaction.id.toString() + '#' + lendgine.txCount.toString())
  burn.transaction = transaction.id
  burn.lendgine = lendgine.id

  burn.amount0 = event.params.amount0Out
  burn.amount1 = event.params.amount1Out
  burn.liquidity = event.params.liquidity
  burn.recipient = event.params.to

  burn.logIndex = event.logIndex

  token0.save()
  token1.save()
  lendgine.save()
  factory.save()
  burn.save()
}

export function handleSwap(event: SwapEvent): void {
  const lendgineAddress = event.address.toHexString()
  const lendgine = Lendgine.load(lendgineAddress)
  const factory = Factory.load(FACTORY_ADDRESS)

  if (!lendgine || !factory) {
    log.error('factory or lendgine not found', [lendgineAddress, FACTORY_ADDRESS])
    return
  }
  const token0 = Token.load(lendgine.token0)
  const token1 = Token.load(lendgine.token1)

  if (!token0 || !token1) {
    log.error('token0 or token1 not found', [lendgine.token0, lendgine.token1])
    return
  }

  // update globals
  factory.txCount = factory.txCount.plus(ONE_BI)
  lendgine.txCount = lendgine.txCount.plus(ONE_BI)

  // update token0 data
  token0.txCount = token0.txCount.plus(ONE_BI)

  // update token1 data
  token1.txCount = token1.txCount.plus(ONE_BI)

  const transaction = loadTransaction(event)

  const swap = new Swap(transaction.id.toString() + '#' + lendgine.txCount.toString())
  swap.transaction = transaction.id
  swap.lendgine = lendgine.id

  swap.amount0Out = event.params.amount0Out
  swap.amount1Out = event.params.amount1Out
  swap.amount0In = event.params.amount0In
  swap.amount1In = event.params.amount1In
  swap.recipient = event.params.to

  swap.logIndex = event.logIndex

  token0.save()
  token1.save()
  lendgine.save()
  factory.save()
  swap.save()
}

export function handleAccrueInterest(event: AccrueInterestEvent): void {
  const lendgineAddress = event.address.toHexString()
  const lendgine = Lendgine.load(lendgineAddress)
  const factory = Factory.load(FACTORY_ADDRESS)

  if (!lendgine || !factory) {
    log.error('factory or lendgine not found', [lendgineAddress, FACTORY_ADDRESS])
    return
  }
  const token0 = Token.load(lendgine.token0)
  const token1 = Token.load(lendgine.token1)

  if (!token0 || !token1) {
    log.error('token0 or token1 not found', [lendgine.token0, lendgine.token1])
    return
  }

  // update globals
  factory.txCount = factory.txCount.plus(ONE_BI)
  lendgine.txCount = lendgine.txCount.plus(ONE_BI)

  // update token0 data
  token0.txCount = token0.txCount.plus(ONE_BI)

  // update token1 data
  token1.txCount = token1.txCount.plus(ONE_BI)

  const transaction = loadTransaction(event)

  const accrueInterest = new AccrueInterest(transaction.id.toString() + '#' + lendgine.txCount.toString())
  accrueInterest.transaction = transaction.id
  accrueInterest.lendgine = lendgine.id

  accrueInterest.timeElapsed = event.params.timeElapsed
  accrueInterest.collateral = event.params.collateral
  accrueInterest.liquidity = event.params.liquidity

  accrueInterest.logIndex = event.logIndex

  token0.save()
  token1.save()
  lendgine.save()
  factory.save()
  accrueInterest.save()
}

export function handleAccruePositionInterest(event: AccruePositionInterestEvent): void {
  const lendgineAddress = event.address.toHexString()
  const lendgine = Lendgine.load(lendgineAddress)
  const factory = Factory.load(FACTORY_ADDRESS)

  if (!lendgine || !factory) {
    log.error('factory or lendgine not found', [lendgineAddress, FACTORY_ADDRESS])
    return
  }
  const token0 = Token.load(lendgine.token0)
  const token1 = Token.load(lendgine.token1)

  if (!token0 || !token1) {
    log.error('token0 or token1 not found', [lendgine.token0, lendgine.token1])
    return
  }

  // update globals
  factory.txCount = factory.txCount.plus(ONE_BI)
  lendgine.txCount = lendgine.txCount.plus(ONE_BI)

  // update token0 data
  token0.txCount = token0.txCount.plus(ONE_BI)

  // update token1 data
  token1.txCount = token1.txCount.plus(ONE_BI)

  const transaction = loadTransaction(event)

  const accruePositionInterest = new AccruePositionInterest(
    transaction.id.toString() + '#' + lendgine.txCount.toString()
  )
  accruePositionInterest.transaction = transaction.id
  accruePositionInterest.lendgine = lendgine.id

  accruePositionInterest.owner = event.params.owner
  accruePositionInterest.rewardPerPosition = event.params.rewardPerPosition

  accruePositionInterest.logIndex = event.logIndex

  token0.save()
  token1.save()
  lendgine.save()
  factory.save()
  accruePositionInterest.save()
}

export function handleCollect(event: CollectEvent): void {
  const lendgineAddress = event.address.toHexString()
  const lendgine = Lendgine.load(lendgineAddress)
  const factory = Factory.load(FACTORY_ADDRESS)

  if (!lendgine || !factory) {
    log.error('factory or lendgine not found', [lendgineAddress, FACTORY_ADDRESS])
    return
  }
  const token0 = Token.load(lendgine.token0)
  const token1 = Token.load(lendgine.token1)

  if (!token0 || !token1) {
    log.error('token0 or token1 not found', [lendgine.token0, lendgine.token1])
    return
  }

  // update globals
  factory.txCount = factory.txCount.plus(ONE_BI)
  lendgine.txCount = lendgine.txCount.plus(ONE_BI)

  // update token0 data
  token0.txCount = token0.txCount.plus(ONE_BI)

  // update token1 data
  token1.txCount = token1.txCount.plus(ONE_BI)

  const transaction = loadTransaction(event)

  const collect = new Collect(transaction.id.toString() + '#' + lendgine.txCount.toString())
  collect.transaction = transaction.id
  collect.lendgine = lendgine.id

  collect.owner = event.params.owner
  collect.recipient = event.params.to
  collect.amount = event.params.amount

  collect.logIndex = event.logIndex

  token0.save()
  token1.save()
  lendgine.save()
  factory.save()
  collect.save()
}
