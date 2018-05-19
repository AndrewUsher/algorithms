/* eslint-disable no-return-assign */
const argumentsOptional = () => {
  const args = Array
    .from(arguments)

  return args
    .some(i => typeof i !== 'number') ? undefined : args.length > 1 ? args
      .reduce((acc, j) => acc += j, 0) : j => typeof j === 'number' ? j + args[0] : undefined
}

module.exports = argumentsOptional
