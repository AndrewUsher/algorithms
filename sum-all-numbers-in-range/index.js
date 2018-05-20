const sumAllNumsInRange = arr => {
  const newArr = arr.sort((x, y) => x - y)
  let last = newArr[1]
  let first = newArr[0]

  let total = (last - first + 1) * (first + last) / 2
  return total
}

module.exports = sumAllNumsInRange
