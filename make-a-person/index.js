class Person {
  // Complete the method below and implement the others similarly
  constructor (fullName) {
    this.fullName = fullName
    this.getFirstName = this.getFirstName.bind(this)
    this.getLastName = this.getLastName.bind(this)
    this.getFullName = this.getFullName.bind(this)
    this.setFirstName = this.setFirstName.bind(this)
    this.setLastName = this.setLastName.bind(this)
    this.setFullName = this.setFullName.bind(this)
  }

  getFirstName () {
    return this.fullName.split(' ')[0]
  }

  getLastName () {
    return this.fullName.split(' ')[1]
  }

  getFullName () {
    return this.fullName
  }

  setFirstName (name) {
    this.fullName = name + ' ' + this.fullName.split(' ')[1]
  }

  setLastName (name) {
    this.fullName = this.fullName.split(' ')[0] + ' ' + name
  }

  setFullName (name) {
    this.fullName = name
  }
}

export default Person
