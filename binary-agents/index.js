const binaryAgent = str => {
  const sentence = String
    .fromCharCode(...str.split(' ')
      .map(char => parseInt(char, 2)))
  return sentence
}

module.exports = binaryAgent
