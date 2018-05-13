/* eslint-disable no-undef */
const sumOfMultiples = require('../sum-of-multiples-of-3-and-5')

describe('Sum of multiples tests', () => {
  test('Passing in string should return false', () => {
    expect(sumOfMultiples('hello')).toBeFalsy()
  })

  test('Passing in array returns false', () => {
    expect(sumOfMultiples([1, 2, 3])).toBeFalsy()
  })

  test('Passing in object returns false', () => {
    expect(sumOfMultiples({ num1: 3, num2: 5 })).toBeFalsy()
  })

  test('Passing in no range defaults to 1000', () => {
    expect(sumOfMultiples()).toBe(233168)
  })

  test('Passing in value changes range', () => {
    expect(sumOfMultiples(100)).toBe(2318)
  })

  test('Passing in negative number returns false', () => {
    expect(sumOfMultiples(-1)).toBeFalsy()
  })
})
