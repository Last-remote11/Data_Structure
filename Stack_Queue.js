// stack 과 queue 는 데이터의 맨 처음이나 끝밖에 조회할 수 없다는 특징이 있다.
// stack 은 나중에 들어오는게 먼저 나가고 (LIFO)
// queue 는 먼저 들어오는 것이 먼저 나간다 (FIFO)


class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Stack {
  constructor() {
    this.top = null
    this.bottom = null
    this.length = 0
  }

  peak() {
    return this.top
  }

  push(value) {
    const newNode = new Node(value)
    if (this.length === 0) {
      this.top = newNode
      this.bottom = newNode
      this.length++
    } else {
      const pointerHolder = this.top
      this.top = newNode
      this.top.next = pointerHolder
      this.length++
      return this.top
    }

  }

  pop() {

    if (this.length === 0) {
      return null
    }
    if (this.length === 1) {
      this.top = null
      this.bottom = null
      this.length--
      return this.top  
    } else {
      this.top = this.top.next
      this.length--
      return this.top      
    }

  }

  isEmpty() {
    if (this.top === null) {
      return true
      } else {
      return false
      }
  }
}

const myStack = new Stack
myStack.push('google')
myStack.push('naver')
myStack.push('twitter')
myStack.push('udemy')
myStack.pop()
console.log(myStack)
console.log(myStack.isEmpty())
