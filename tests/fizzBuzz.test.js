/* eslint-disable no-undef */
const fizzBuzz = require('../fizzbuzz')
const exampleResult = [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz']

describe('Fizzbuzz tests', () => {
  describe('Unusual cases', () => {
    test('Passing in string returns false', () => {
      expect(fizzBuzz('hello')).toBe(false)
    })

    test('Passing in string returns false', () => {
      expect(fizzBuzz(1, 'hello')).toBe(false)
    })

    test('Passing in string returns false', () => {
      expect(fizzBuzz('hello', 5)).toBe(false)
    })

    test('Passing in object returns false', () => {
      expect(fizzBuzz({ a: 1 })).toBe(false)
    })

    test('Passing in object returns false', () => {
      expect(fizzBuzz(1, { a: 1 })).toBe(false)
    })

    test('Passing in object returns false', () => {
      expect(fizzBuzz({ a: 1 }, 5)).toBe(false)
    })

    test('Passing in array returns false', () => {
      expect(fizzBuzz([1, 2, 3])).toBe(false)
    })

    test('Passing in array returns false', () => {
      expect(fizzBuzz(1, [1, 2, 3])).toBe(false)
    })

    test('Passing in string returns false', () => {
      expect(fizzBuzz([1, 2, 3], 5)).toBe(false)
    })
  })

  describe('Number tests', () => {
    test('Fizzbuzz output is correct', () => {
      expect(fizzBuzz(1, 15)).toEqual(exampleResult)
    })
  })
})
