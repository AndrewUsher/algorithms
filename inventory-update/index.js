const inventoryUpdate = (arr1, arr2) => {
  let flag = 0
  arr2.forEach(item => {
    flag = 0
    arr1.forEach(list => {
      if (item[1] === list[1]) {
        list[0] += item[0]
        flag = 1
      }
    })

    if (flag === 0) arr1.push(item)
  })

  return arr1.sort((a, b) => a[1] > b[1] ? 1 : -1)
}

// Example inventory lists
const curInv = [
  [21, 'Bowling Ball'],
  [2, 'Dirty Sock'],
  [1, 'Hair Pin'],
  [5, 'Microphone']
]

const newInv = [
  [2, 'Hair Pin'],
  [3, 'Half-Eaten Apple'],
  [67, 'Bowling Ball'],
  [7, 'Toothpaste']
]

module.exports = inventoryUpdate
