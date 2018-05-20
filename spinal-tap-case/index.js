const spinalCase = str => {
  return str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase()
}

module.exports = spinalCase
