const palindrome = string => {
  if (typeof string === 'number' || typeof string === 'object') return false
  let original = string.replace(/\s/g, '').toLowerCase()
  let reversed = string
    .replace(/\s/g, '')
    .toLowerCase()
    .split('')
    .reverse()
    .join('')
  return reversed === original
}

module.exports = palindrome
