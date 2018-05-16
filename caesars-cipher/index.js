const caesarsCipher = str => {
  return str.replace(/[A-Z]/g, L => String.fromCharCode((L.charCodeAt(0) % 26) + 65))
}

module.exports = caesarsCipher
