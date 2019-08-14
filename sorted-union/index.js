const sortedUnion = (...args) => {
  return [...new Set(args)]
}

module.exports = sortedUnion
