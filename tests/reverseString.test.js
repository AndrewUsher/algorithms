/* eslint-disable no-undef */
const reverseString = require('../reverse-string')

describe('Reverse string tests', () => {
  test('Passing in number returns false', () => {
    expect(reverseString(5)).toBeFalsy()
  })

  test('Passing in array returns false', () => {
    expect(reverseString([1, 2, 3])).toBeFalsy()
  })

  test('Passing in object returns false', () => {
    expect(reverseString({ num1: 3, num2: 5 })).toBeFalsy()
  })

  describe('Reverses strings correctly', () => {
    test('Reverses strings with no spaces', () => {
      expect(reverseString('hello')).toBe('olleh')
    })

    test('Reverses strings with spaces', () => {
      expect(reverseString('hello world')).toBe('dlrow olleh')
    })
  })
})
