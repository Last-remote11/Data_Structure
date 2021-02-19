// stack 과 queue 는 데이터의 맨 처음이나 끝밖에 조회할 수 없다는 특징이 있다.
// stack 은 나중에 들어오는게 먼저 나가고 (LIFO)
// queue 는 먼저 들어오는 것이 먼저 나간다 (FIFO)



// 스택은 배열로 구현하든 링크드 리스트로 구현하든 각각의 장단점은 있지만 그래도 둘 다 사용해도 된다.
// 하지만 큐는 배열로 구현하면 아주 비효율적이다. 선입선출이라는 점을 잠깐만 생각해본다면 당연한 일이다


class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Stack1 {
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
      const pointerHolder = this.top
      this.top = null
      this.bottom = null
      this.length--
      return pointerHolder
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

const myStack = new Stack1
// myStack.push('google')
// myStack.push('naver')
// myStack.push('twitter')
// myStack.push('udemy')
// myStack.pop()
// console.log(myStack)
// console.log(myStack.isEmpty())




class Stack2 {
  
  constructor() {
    this.data = []
  }

  peak() {
    if (this.data.length === 0) {
      return null
    } else {
      return this.data[this.data.length-1]
    }
  }

  push(value) {
    this.data.push(value)
    return this.data
  }

  pop() {
    this.data.pop()
  }

  isEmpty() {
    if (this.data.length === 0) {
      return true
    } else {
      return false
    }
  }
}


const arrayStack = new Stack2
// arrayStack.push('naver')
// arrayStack.push('kakao')
// arrayStack.push('twitter')
// console.log(arrayStack.peak())
// arrayStack.pop()
// arrayStack.isEmpty()
// console.log(arrayStack)



class Queue {

  constructor() {
    this.first = null
    this.last = null
    this.length = 0
  }

  peek() {
    if (this.length === 0) {
      return null
    } 
    return this.first
  }

  enqueue(value) {

    const newNode = new Node(value)
    
    if (this.length === 0) {
      this.first = newNode
      this.last = newNode
      this.length++
      return this
    }

    let target = this.first
    for (let i = 0; i < this.length - 1; i++) {
      target = target.next
    }

    target.next = newNode
    this.last = newNode
    this.length++
    return this
  }

  dequeue() {
    
    if (this.length === 0) {
      return this
      }

    if (this.first === this.last) {
      const pointerHolder = this.first
      this.first = null
      this.last = null
      this.length--
      return pointerHolder
    }
    
    const pointerHolder = this.first.value
    this.first = this.first.next
    this.length--
    return pointerHolder
  }

  inEmpty() {
    if (this.length === 0) {
      return true
    } else {
      return false
    }
  }
}

const myQueue = new Queue
myQueue.enqueue('naver')
myQueue.enqueue('google')
myQueue.enqueue('discord')
myQueue.enqueue('youtube')

myQueue.dequeue()
myQueue.dequeue()


console.log(myQueue)
