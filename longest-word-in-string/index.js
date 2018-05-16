const longestWord = str => {
  return str
    .split(' ')
    .sort((str1, str2) => str2.length - str1.length)[0].length
}

module.exports = longestWord
