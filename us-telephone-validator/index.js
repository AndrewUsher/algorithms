const telephoneCheck = string => {
  return /^(1\s?)?(\(\d{3}\)|\d{3})[-]?\d{3}[-]?\d{4}$/.test(string)
}

module.exports = telephoneCheck
