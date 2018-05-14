/* eslint-disable no-undef */
const palindrome = require('../palindrome')

describe('Palindrome tests', () => {
  describe('Unusual cases', () => {
    test('Passing in number returns false', () => {
      expect(palindrome(2)).toBeFalsy()
    })

    test('Passing in array returns false', () => {
      expect(palindrome([1, 2, 1])).toBeFalsy()
    })

    test('Passing in object returns false', () => {
      expect(palindrome({ a: 1, b: 2, c: 3 })).toBeFalsy()
    })
  })

  describe('String tests', () => {
    test('String with no spaces', () => {
      expect(palindrome('deleveled')).toBe(true)
    })

    test('String with no spaces and random capital letters', () => {
      expect(palindrome('reDivIdEr')).toBe(true)
    })

    test('String with spaces', () => {
      expect(palindrome('a toyota')).toBe(true)
    })

    test('String with no spaces and random capital letters', () => {
      expect(palindrome('A Santa at NASA')).toBe(true)
    })

    test('String with weird spacing', () => {
      expect(palindrome('   A  car, a man   , a maraca'))
    })
  })
})
