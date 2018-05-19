const symmetricDifference = (args) => {
  const diff = (A, B) => new Set([...A].filter(num => !B.has(num)))
  const result = [...arguments]
    .map(arr => new Set(arr))
    .reduce((current, set) => new Set([...diff(current, set), ...diff(set, current)]))

  return [...result]
}

module.exports = symmetricDifference
