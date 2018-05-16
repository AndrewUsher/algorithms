const seekAndDestroy = arr => {
  const args = Array.from(arguments).slice(1)
  return arr.filter(value => !args.includes(value))
}

module.exports = seekAndDestroy
