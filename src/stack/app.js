import StackArray from './StackArray'
import StackObject from './StackObject'
import StackWeakMap from './StackWeakMap'

//  基于数组的 Stack 类
let stackArray = new StackArray()

console.log(stackArray)

console.log(stackArray.isEmpty())

stackArray.push(5)
stackArray.push(8)

stackArray.push(11)

console.log(stackArray.size())

console.log(stackArray.peek())

console.log(stackArray.isEmpty())

stackArray.push(15)

stackArray.pop()
stackArray.pop()

console.log(stackArray.size())

// 基于对象的 Stack 类

let stackObject = new StackObject()

console.log(stackObject)

stackObject.push(5)
stackObject.push(8)

stackObject.push(11)

console.log(stackObject.size())

console.log(stackObject.peek())

console.log(stackObject.isEmpty())

stackObject.push(15)

stackObject.pop()
stackObject.pop()

console.log(stackObject.size())

// 使用 WeakMap 实现 Stack 类
// 虽然实现 items 为私有属性，但是扩展时，不能继承私有属性并且可读性不强
let stackWeakMap = new StackWeakMap()

console.log(stackWeakMap)
stackWeakMap.push(5)

console.log(stackWeakMap.peek())

stackWeakMap.clear()

console.log(stackWeakMap.peek())
