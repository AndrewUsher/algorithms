const titleCase = str => {
  let arr = str
    .toLowerCase()
    .split(' ')

  let newArr = arr
    .map(word => word
      .charAt(0)
      .toUpperCase() + word.slice(1))

  return newArr.join(' ')
}

module.exports = titleCase
