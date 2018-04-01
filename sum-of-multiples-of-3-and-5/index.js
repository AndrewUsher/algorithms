function divisible (dividend, divisor) {
  return dividend % divisor === 0
}

const sumOfMultiples = () => {
  let total = 0

  for (let i = 1; i < 1000; i++) {
    if (divisible(i, 3) || divisible(i, 5)) {
      total += i
    }
  }

  console.log(total)
}

sumOfMultiples()
