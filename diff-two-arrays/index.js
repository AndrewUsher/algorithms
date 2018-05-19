const diffArrays = (arr1, arr2) => {
  const differences = arr1
    .concat(arr2)
    .filter(i => !arr1.includes(i) || !arr2.includes(i))

  return differences
}

module.exports = diffArrays
