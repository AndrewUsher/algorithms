const missingLetters = str => {
  let missingLetter = ''
  let comparison = str.charCodeAt(0)

  str
    .split('')
    .map((char, i) => {
      str.charCodeAt(i) === comparison ? comparison++ : missingLetter = String.fromCharCode(comparison)
    })

  return missingLetter || undefined
}

module.exports = missingLetters
