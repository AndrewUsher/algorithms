const titleCase = str => {
  const arr = str
    .toLowerCase()
    .split(' ')

  const newArr = arr
    .map(word => word
      .charAt(0)
      .toUpperCase() + word.slice(1))

  return newArr.join(' ')
}

module.exports = titleCase
