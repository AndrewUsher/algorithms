/* eslint-disable no-undef */
const pairwise = require('../pairwise')

describe('Pairwise tests', () => {
  describe('Unusual cases', () => {
    test('Passing in string returns false', () => {
      expect(pairwise('Hello')).toBe(false)
    })

    test('Passing in string returns false', () => {
      expect(pairwise(1, 'hello')).toBe(false)
    })

    test('Passing in object returns false', () => {
      expect(pairwise({ a: 1 })).toBe(false)
    })

    test('Passing in object returns false', () => {
      expect(pairwise(1, { a: 1 })).toBe(false)
    })
  })

  describe('Array tests', () => {
    test('pairwise([1, 4, 2, 3, 0, 5], 7) returns 11', () => {
      expect(pairwise([1, 4, 2, 3, 0, 5], 7)).toBe(11)
    })

    test('pairwise([1, 3, 2, 4], 4) returns 1', () => {
      expect(pairwise([1, 3, 2, 4], 4)).toBe(1)
    })

    test('pairwise([1, 1, 1], 2) returns 1', () => {
      expect(pairwise([1, 1, 1], 2)).toBe(1)
    })

    test('pairwise([0, 0, 0, 0, 1, 1], 1) returns 10', () => {
      expect(pairwise([0, 0, 0, 0, 1, 1], 1)).toBe(10)
    })

    test('pairwise([], 100) returns 0', () => {
      expect(pairwise([], 100)).toBe(0)
    })
  })
})
