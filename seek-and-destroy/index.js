const seekAndDestroy = (arr, ...args) => {
  return arr.filter(value => !args.includes(value))
}

module.exports = seekAndDestroy
