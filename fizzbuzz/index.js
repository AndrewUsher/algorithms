// Print all numbers in given range. For multiples of 3, print fizz.
// For multiples of 5, print buzz.
// For multiples of 3 and 5, print fizzbuzz.

const fizzBuzz = (start = 1, end = 100) => {
  if (
    typeof start === 'string' ||
    typeof end === 'string' ||
    typeof start === 'object' ||
    typeof end === 'object'
  ) {
    return false
  }
  let results = []
  for (let i = start; i <= end; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      results.push('fizzbuzz')
    } else if (i % 3 === 0) {
      results.push('fizz')
    } else if (i % 5 === 0) {
      results.push('buzz')
    } else {
      results.push(i)
    }
  }

  return results
}

module.exports = fizzBuzz
