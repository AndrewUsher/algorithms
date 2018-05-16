const confirmEnding = (str, target) => {
  return str.substr(str.length - target.length) === target
}

module.exports = confirmEnding
