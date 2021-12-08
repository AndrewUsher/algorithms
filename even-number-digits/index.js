/**
 * @param {number[]} nums
 * @return {number}
 */
const findEvenNumbers = nums => {
  let total = 0
  for (const num of nums) {
    if (String(num).length % 2 === 0) {
      total++
    }
  }

  return total
}

module.exports = findEvenNumbers
