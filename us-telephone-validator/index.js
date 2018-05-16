const telephoneCheck = string => {
  const expression = new RegExp(/^(1\s?)?(\(\d{3}\)|\d{3})[-]?\d{3}[-]?\d{4}$/)
  return expression.test(string)
}

module.exports = telephoneCheck
