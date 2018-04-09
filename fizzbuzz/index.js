// Print all numbers in given range. For multiples of 3, print fizz. For multiples of 5, print buzz. For multiples of 3 and 5, print fizzbuzz.

function fizzBuzz (start, end) {
  for (let i = start; i <= end; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz')
    } else if (i % 3 === 0) {
      console.log('fizz')
    } else if (i % 5 === 0) {
      console.log('buzz')
    } else {
      console.log(i)
    }
  }
}

fizzBuzz(1, 100)
