/* eslint-disable no-undef */
const factorializeNumber = require('../factorialize-number')

describe('Factorialize number tests', () => {
  test('Passing in string should return false', () => {
    expect(factorializeNumber('hello')).toBeFalsy()
  })

  test('Passing in array returns false', () => {
    expect(factorializeNumber([1, 2, 3])).toBeFalsy()
  })

  test('Passing in object returns false', () => {
    expect(factorializeNumber({ num1: 3, num2: 5 })).toBeFalsy()
  })

  describe('Various number tests', () => {
    test('5! is correct', () => {
      expect(factorializeNumber(5)).toBe(120)
    })

    test('25! is correct', () => {
      expect(factorializeNumber(25)).toBe(1.5511210043330986e+25)
    })
  })

  describe('Handles negative numbers', () => {
    test('-1! returns false', () => {
      expect(factorializeNumber(-1)).toBeFalsy()
    })

    test('-100! returns false', () => {
      expect(factorializeNumber(-100)).toBeFalsy()
    })
  })
})
