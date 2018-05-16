const largestOfFour = arr => {
  const largestNumbers = arr.map(list => list
    .reduce((previous, current) =>
      previous < current ? current : previous
    )
  )
  return largestNumbers
}

module.exports = largestOfFour
