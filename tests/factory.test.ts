import { describe, test, clearStore, assert, createMockedFunction, afterEach } from 'matchstick-as/assembly/index'
import { FACTORY_ADDRESS } from '../src/utils'
import { handleLendgineCreated } from '../src/factory'
import { AddressFour, AddressOne, AddressThree, AddressTwo, createLendgineCreatedEvent } from './utils'
import { Address, BigInt, ethereum } from '@graphprotocol/graph-ts'
import { Factory } from '../src/types/Factory/Factory'

const FactoryEntityType = 'Factory'
const LendgineEntityType = 'Lendgine'

export { handleLendgineCreated }

describe('handleLendgineCreated()', () => {
  afterEach(() => {
    clearStore()
  })

  test('Save Factory from event', () => {
    const lendgineCreatedEvent = createLendgineCreatedEvent(
      AddressOne,
      AddressTwo,
      18,
      18,
      BigInt.fromString('1000000000000000000'),
      AddressThree
    )

    handleLendgineCreated(lendgineCreatedEvent)

    assert.fieldEquals(FactoryEntityType, FACTORY_ADDRESS, 'id', FACTORY_ADDRESS)
    assert.fieldEquals(FactoryEntityType, FACTORY_ADDRESS, 'lendgineCount', '1')
    assert.fieldEquals(LendgineEntityType, AddressThree.toHexString(), 'token0', AddressOne.toHexString())
    assert.fieldEquals(LendgineEntityType, AddressThree.toHexString(), 'token1', AddressTwo.toHexString())
    assert.fieldEquals(LendgineEntityType, AddressThree.toHexString(), 'token0Exp', '18')
    assert.fieldEquals(LendgineEntityType, AddressThree.toHexString(), 'token1Exp', '18')
    assert.fieldEquals(LendgineEntityType, AddressThree.toHexString(), 'upperBound', '1000000000000000000')

    assert.entityCount(FactoryEntityType, 1)
    assert.entityCount(LendgineEntityType, 1)
  })

  test('Save Factory from contract call', () => {
    createMockedFunction(
      Address.fromString(FACTORY_ADDRESS),
      'createLendgine',
      'createLendgine(address,address,uint8,uint8,uint256):(address)'
    )
      .withArgs([
        ethereum.Value.fromAddress(AddressOne),
        ethereum.Value.fromAddress(AddressTwo),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromU32(18)),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromU32(18)),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromString('1000000000000000000')),
      ])
      .returns([ethereum.Value.fromAddress(AddressThree)])

    const factory = Factory.bind(Address.fromString(FACTORY_ADDRESS))
    const result = factory.createLendgine(AddressOne, AddressTwo, 18, 18, BigInt.fromString('1000000000000000000'))

    assert.addressEquals(AddressThree, result)
  })

  test('Create two lendgines', () => {
    handleLendgineCreated(
      createLendgineCreatedEvent(AddressOne, AddressTwo, 18, 18, BigInt.fromString('1000000000000000000'), AddressThree)
    )
    handleLendgineCreated(
      createLendgineCreatedEvent(AddressOne, AddressTwo, 18, 18, BigInt.fromString('1000000000000000000'), AddressFour)
    )

    assert.fieldEquals(FactoryEntityType, FACTORY_ADDRESS, 'lendgineCount', '2')
    assert.entityCount(FactoryEntityType, 1)
    assert.entityCount(LendgineEntityType, 2)
  })
})
