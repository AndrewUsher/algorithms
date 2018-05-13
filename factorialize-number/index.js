const factorializeNumber = (num) => {
  if (typeof num === 'string' || typeof num === 'object' || Array.isArray(num) || num <= 0) {
    return false
  }
  let result = 1

  for (let i = 1; i <= num; i++) {
    result *= i
  }

  return result
}

module.exports = factorializeNumber
