const whatIsInAName = (collection, source) => {
  let keys = Object.keys(source)

  return collection
    .filter(object => keys
      .every(key => object
        .hasOwnProperty(key) && object[key] === source[key]))
}

module.exports = whatIsInAName
