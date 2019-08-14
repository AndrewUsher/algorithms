const chunkyMonkey = (arr, size) => {
  const chunkArr = []
  let i = 0

  while (arr.length > i) {
    chunkArr.push(arr.slice(i, i + size))
    i += size
  }

  return chunkArr
}

module.exports = chunkyMonkey
