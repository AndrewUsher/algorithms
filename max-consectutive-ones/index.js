/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnes = nums => {
  let max = 0; let curr = 0

  for (let i = 0; i < nums.length; i++) {
    const el = nums[i]
    if (el === 1) {
      curr++
      if (curr > max) {
        max = curr
      }
    } else {
      curr = 0
    }
  }

  return max
}

module.exports = findMaxConsecutiveOnes
