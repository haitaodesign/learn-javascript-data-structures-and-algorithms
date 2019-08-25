import StackArray from './StackArray'

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
