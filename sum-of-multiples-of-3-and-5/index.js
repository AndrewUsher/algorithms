const isDivisible = (dividend, divisor) => dividend % divisor === 0

const sumOfMultiples = (range = 1000) => {
  let total = 0

  for (let i = 1; i < range; i++) {
    if (isDivisible(i, 3) || isDivisible(i, 5)) {
      total += i
    }
  }

  return total
}

module.exports = sumOfMultiples
