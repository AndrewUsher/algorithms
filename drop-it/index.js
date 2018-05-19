const dropIt = (arr, func) => {
  const result = arr
    .slice(arr
      .findIndex(func) >= 0 ? arr
        .findIndex(func) : arr.length, arr.length)

  return result
}

module.exports = dropIt
