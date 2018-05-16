const chunkyMonkey = (arr, size) => {
  let chunkArr = []
  let i = 0

  while (arr.length > i) {
    chunkArr.push(arr.slice(i, i + size))
    i += size
  }

  return chunkArr
}

module.exports = chunkyMonkey
