const findersKeepers = (arr, func) => {
  const result = arr.filter(func)
  return result[0]
}

module.exports = findersKeepers
