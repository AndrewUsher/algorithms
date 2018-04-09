const palindrome = string => {
  let original = string.replace(/\s/g, '').toLowerCase()
  let reversed = string
    .replace(/\s/g, '')
    .toLowerCase()
    .split('')
    .reverse()
    .join('')
  return reversed === original
}

console.log(palindrome('Was it a car or a cat I saw'))
