const convertHTMLEntity = str => {
  const entities = {
    '>': '&gt;',
    '<': '&lt;',
    '\'': '&apos;',
    '"': '&quot;',
    '&': '&amp;'
  }

  return str.split('').map(char => entities[char] || char).join('')
}

module.exports = convertHTMLEntity
