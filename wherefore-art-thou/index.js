const whatIsInAName = (collection, source) => {
  const keys = Object.keys(source)

  return collection.filter(object => keys.every(key => object.prototype.hasOwnProperty.call(object, key) && object[key] === source[key]))
}

module.exports = whatIsInAName
