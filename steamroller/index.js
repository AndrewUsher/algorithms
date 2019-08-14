const steamrollArray = arr => {
  const flattenedArr = [].concat(...arr)
  return flattenedArr.some(Array.isArray) ? steamrollArray(flattenedArr) : flattenedArr
}

module.exports = steamrollArray
