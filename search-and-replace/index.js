const stringReplace = (str, before, after) => {
  const expression = new RegExp(before, 'gi')
  const capitalRegex = new RegExp(/[A-Z]/)

  if (capitalRegex.test(before[0])) {
    after = after.charAt(0).toUpperCase() + after.slice(1)
  }

  const newString = str.replace(expression, after)
  return newString
}

module.exports = stringReplace
