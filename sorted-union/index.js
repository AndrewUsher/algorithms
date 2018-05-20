const sortedUnion = arr => {
  const argumentsArr = [].concat(...arguments)
  const set = [...new Set(argumentsArr)]
  return set
}

module.exports = sortedUnion
