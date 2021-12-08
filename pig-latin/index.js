const translatePigLatin = str => {
  const vowel = str.search(/[aeiou]/)
  return vowel === 0 ? str + 'way' : str.substr(vowel) + str.substr(0, vowel) + 'ay'
}

module.exports = translatePigLatin
