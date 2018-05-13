const reverseString = string => {
  if (typeof string === 'object' || Array.isArray(string) || typeof string === 'number') return false
  return string
    .toLowerCase()
    .split('')
    .reverse()
    .join('')
}

module.exports = reverseString
