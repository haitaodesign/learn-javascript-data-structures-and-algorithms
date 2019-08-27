import Queue from './Queue'

const queue = new Queue()

console.log(queue)

console.log(queue.isEmpty()) // true

queue.enqueue('li')
queue.enqueue('hai')
queue.enqueue('tao')

console.log(queue.toString())

console.log(queue.isEmpty())

console.log(queue.size())

queue.dequeue('li')
console.log(queue.toString())
