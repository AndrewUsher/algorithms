// Tests if string is a palindrome: same reversed
const palindrome = string => {
  if (typeof string === 'number' || typeof string === 'object') return false
  const original = string.replace(/\s/g, '').toLowerCase()
  const reversed = string
    .replace(/\s/g, '')
    .toLowerCase()
    .split('')
    .reverse()
    .join('')
  return reversed === original
}

module.exports = palindrome
