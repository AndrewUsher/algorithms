const smallestCommonMultiple = arr => {
  let range = []
  for (let i = Math.max(arr[0], arr[1]); i >= Math.min(arr[0], arr[1]); i--) {
    range.push(i)
  }

  const gcdFunc = (num1, num2) => {
    return num2 === 0 ? num1 : gcdFunc(num2, num1 % num2)
  }
  let scm = range[0]
  for (let i = 1; i < range.length; i++) {
    let gcd = gcdFunc(scm, range[i])
    scm = (scm * range[i]) / gcd
  }

  return scm
}

module.exports = smallestCommonMultiple
