const items = new WeakMap()
class StackWeakMap {
  constructor () {
    items.set(this, [])
  }

  push (element) {
    const s = items.get(this)
    s.push(element)
  }

  pop () {
    const s = items.get(this)
    const r = s.pop()
    return r
  }

  peek () {
    if (this.isEmpty()) {
      return undefined
    }
    const s = items.get(this)
    return s[s.length - 1]
  }

  isEmpty () {
    const s = items.get(this)
    return s.length === 0
  }

  size () {
    const s = items.get(this)
    return s.length
  }

  clear () {
    items.set(this, [])
  }
}

export default StackWeakMap
