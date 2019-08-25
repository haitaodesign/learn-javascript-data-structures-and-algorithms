import StackArray from './StackArray'
import StackObject from './StackObject'

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
