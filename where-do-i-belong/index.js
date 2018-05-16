
const whereDoIBelong = (arr, num) => {
  const newArr = [...arr, num].sort((a, b) => a - b)
  return newArr.indexOf(num)
}

module.exports = whereDoIBelong
