const convertToRoman = num => {
  const numerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
  const nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]

  let convertedVal = ''

  for (let i = 0; i < nums.length; i++) {
    while (nums[i] <= num) {
      convertedVal += numerals[i]
      num -= nums[i]
    }
  }

  return convertedVal
}

module.exports = convertToRoman
