// big O if LinkedList
// append, prepend : O(1)
// insert : O(n)
// search : O(n)
// lookUp : O(n)

// LinkedList는 array에 비해 삽입과 삭제 과정이 간단하며 해시테이블과 달리 sort되어있다는 장점을 가짐
// size도 유연
// 그러나 array는 비슷한 장소에 저장되어 찾기 쉬운 반면 LinkedList는 메모리에 흩어져 있어 lookup이 약간 느리며
// 메모리도 많이 차지한다.

// 저수준의 자료구조라 js엔 없음



class Node {
    constructor(value) {
      this.value = value,
      this.next = null
    }
  }
  // 어려번 만들기 귀찮으니 새 node를 만드는 클래스 추가
  
  
class LinkedList {
    constructor(value) {
        this.head = {
        value: value,
        next: null
        }
        this.tail = this.head;
        this.length = 1
    }

    append(value) {
        
        const newNode = new Node(value)
        this.tail.next = newNode // pointing this.head
        this.tail = newNode // this.head의 꼬리부분으로 갱신
        this.length++
        return this
    }

    prepend(value) {

        const newNode = new Node(value)
        newNode.next = this.head
        this.head = newNode
        this.length++
        return this
    }

    printList() {
        let array = []
        let currentNode = this.head
        while (currentNode.next !== null) {
        array.push(currentNode.value)
        currentNode = currentNode.next
        }
        array.push(currentNode.value)
        return array
    }

    insert(index, value) {

        if (index >= this.length) {
            return this.append(value);
        }
        if (index === 0) {
            this.prepend(value);
            return this.printList();
        }

        const newNode = new Node(value)
        const leader = this.traverseToIndex(index-1)
        const holdingPointer = leader.next
        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++
    }

    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head
        while (counter !== index) {
        currentNode = currentNode.next
        counter++;
        }
        return currentNode;
    }

    remove(index) {

        const leader = this.traverseToIndex(index-1)
        const deleteNode = leader.next
        leader.next = deleteNode.next
        this.length--
        return this.printList
    }      

    reverse() {
        if (this.head.next) {
        return this.head
        }
        
        let first = this.head
        let second = this.head.next

        while (second) {
        const temp = second.next
        second.next = first
        first = second
        second = temp
        }
        this.head.next = null
        this.head = first
    }
}



myList = new LinkedList(0)
myList.append(1)
myList.append(2)
myList.append(4)
myList.append(6)
myList.append(10)
myList.remove(2)
myList.reverse()
// myList.printList()


// Doubly LinkedList는 값을 하나 더 총 두개 가지며 한 값은 이전처럼 
// 다음 node를 가리키고 새로 생긴 값은 이전의 node를 기리킨다.
// traverse과정이 더 빨라지지만 메모리를 더 차지한다는 단점이 있다.

class DoublyNode {
    constructor(value) {
        this.value = value,
        this.next = null,
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor(value) {
        this.head = {
        value: value,
        next: null,
        prev: null
        }
        this.tail = this.head;
        this.length = 1
    }

    append(value) {
        
        const newNode = new DoublyNode(value)
        newNode.prev = this.tail
        this.tail.next = newNode // pointing this.head
        this.tail = newNode // this.head의 꼬리부분으로 갱신
        this.length++
        return this
    }

    prepend(value) {

        const newNode = new Node(value)
        newNode.next = this.head
        this.head.prev = newNode
        this.head = newNode
        this.length++
        return this
    }

    printList() {
        let array = []
        let currentNode = this.head
        while (currentNode.next !== null) {
        array.push(currentNode.value)
        currentNode = currentNode.next
        }
        array.push(currentNode.value)
        return array
    }

    insert(index, value) {

        if (index >= this.length) {
        return this.append(value);
        }
        if (index === 0) {
        this.prepend(value);
        return this.printList();
        }

        const newNode = new Node(value)
        const leader = this.traverseToIndex(index-1)
        const follower = leader.next
        leader.next = newNode;
        newNode.prev = leader
        newNode.next = follower;
        follower.prev = newNode
        this.length++
    }

    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head
        while (counter !== index) {
        currentNode = currentNode.next
        counter++;
        }
        return currentNode;
    }

    remove(index) {

        const leader = this.traverseToIndex(index-1)
        const deleteNode = leader.next
        leader.next = deleteNode.next
        deleteNode.next.prev = leader
        this.length--
        return this.printList
    }
}

myList = new DoublyLinkedList(0)
myList.append(1)
myList.append(2)
myList.append(4)
myList.append(6)
myList.append(10)
myList.remove(2)
