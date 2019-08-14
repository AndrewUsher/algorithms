const sumAllNumsInRange = arr => {
  const newArr = arr.sort((x, y) => x - y)
  const last = newArr[1]
  const first = newArr[0]

  const total = (last - first + 1) * (first + last) / 2
  return total
}

module.exports = sumAllNumsInRange
