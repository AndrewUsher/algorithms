const repeatString = (str, num) => {
  return num < 0 ? '' : str.repeat(num)
}

module.exports = repeatString
