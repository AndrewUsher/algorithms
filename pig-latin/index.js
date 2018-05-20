const translatePigLatin = str => {
  const vowelRegex = new RegExp(/[aeiou]/)
  const vowel = str.search(vowelRegex)
  return vowel === 0 ? str + 'way' : str.substr(vowel) + str.substr(0, vowel) + 'ay'
}

module.exports = translatePigLatin
