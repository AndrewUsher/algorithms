const mutations = arr => {
  const firstArr = arr[0].toLowerCase()
  const secondArr = arr[1].toLowerCase()

  return secondArr
    .split('')
    .every(char => firstArr.indexOf(char) !== -1)
}

module.exports = mutations
