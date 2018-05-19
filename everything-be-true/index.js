const everythingBeTrue = (collection, pre) => {
  const result = collection.every(object => object[pre])
  return result
}

module.exports = everythingBeTrue
