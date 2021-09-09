class StackObject {
  constructor () {
    this.count = 0
    this.items = {}
  }

  push (element) {
    this.items[this.count] = element
    this.count++
  }

  pop () {
    if (this.isEmpty()) {
      return undefined
    }
    this.count--
    const result = this.items[this.count]
    delete this.items[this.count]
    return result
  }

  peek () {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.count - 1]
  }

  isEmpty () {
    return this.count === 0
  }

  clear () {
    // 这里没有遵循后进先出原则
    this.items = []
    this.count = 0
    // 使用下面的实现遵循后进先出原则
    // while (!this.isEmpty()) {
    //   this.pop()
    // }
  }

  size () {
    return this.count
  }

  toString () {
    if (this.isEmpty()) {
      return ''
    }
    let objString = `${this.items[0]}`
    for (let i = 0; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`
    }
    return objString
  }
}

export default StackObject
