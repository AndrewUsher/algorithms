// search array for elements that when paired, equal the second argument, then sum their indices
const pairwise = (arr, arg) => {
  if (Array.isArray(arr)) {
    const newArr = arr.slice()
    return newArr.reduce((a, b, index) => {
      const difference = arg - b

      if (newArr.indexOf(difference) !== -1 && newArr.indexOf(difference) !== index) {
        const total = index + newArr.indexOf(difference)
        newArr.splice(index, 1, NaN)
        newArr.splice(newArr.indexOf(difference), 1, NaN)
        return a + total
      }

      return a
    }, 0)
  } else {
    return false
  }
}

module.exports = pairwise
