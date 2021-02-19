// 이진 탐색 트리는 자식 노드는 두개까지만 가질 수 있고 각 노드들은 단 하나의 부모 노드만 가지고 있으며
// 자기보다 큰 자식 노드는 오른쪽, 작으면 왼쪽에 배치하는 규칙을 가진 계층형 자료구조이다.

// lookup과 delete, inset가 이상적인 경우 O(log n) 이지만
// 나쁜 경우 O(n)까지 갈 수 있다

// O(n)보다 빠르고 크기를 늘리기 쉬우며 정렬이 되어있다는 장점이 있지만 O(1)이 없다는 단점이 있다.
// 바꿔 말하면 어느 쪽에서도 다른 자료구조들 중 가장 빠르지 않다.


class NewTreeNode {
    constructor(value) {
      this.value = value
      this.right = null
      this.left = null
    }
  }
  
  
  class BST {
    constructor() {
      this.root = null
    }
  
    insert(value) {
  
      const newNode = new NewTreeNode(value)
  
      if (!this.root) {
        this.root = newNode
        return this
      } else {
        let currentNode = this.root
          while (true) {
            if (value < currentNode.value) {
              if (!currentNode.left) {
                currentNode.left = newNode
                return this
              } 
              currentNode = currentNode.left
            } 
            else {
              if (!currentNode.right) {
                currentNode.right = newNode
                return this
              } 
              currentNode = currentNode.right
            }
          }
        }
    }
  
  
    lookup(value) {
      if (!this.root) {
        return false
      }
  
      let currentNode = this.root
  
      while (currentNode) {
  
        if (value < currentNode.value) {
          currentNode = currentNode.left
        } else if (value > currentNode.value) {
          currentNode = currentNode.right
        } else if (value === currentNode.value) {
          return true
        }
      }
      return false 
    }
  
    remove(value) {
      // 삭제할 값을 찾을때까지 전진
      // 삭제할 값을 찾은 후 삭제할 값의 right로 한번 가고 그다음 계속 left를 찾은 뒤 left가 없으면
      // 마지막 left를 삭제하려는 값과 대체
      if (!this.root) {
        return null
      }
  
      let currentNode = this.root
      let parentNode = ''
      let itsLeft = false
  
      while (currentNode) {
  
        if (value < currentNode.value) {
          parentNode = currentNode
          itsLeft = true
          currentNode = currentNode.left
        } else if (value > currentNode.value) {
          parentNode = currentNode
          itsLeft = false
          currentNode = currentNode.right
        } else if (value === currentNode.value) {
          // 찾았음
          let deleteNode = currentNode
          
          if (!deleteNode.right && !deleteNode.left) { // leaf
            if (itsLeft) {
              parentNode.left = null
              return this
            } else {
              parentNode.right = null
              return this
            }
          } else if (!deleteNode.right) { // 왼쪽 가지만 있는경우
            if (itsLeft) {
              parentNode.left = deleteNode.left
              return this
            } else {
              parentNode.right = deleteNode.left
              return this
            }
          } else if (!deleteNode.left) { // 오른쪽 가지만 있는경우
            if (itsLeft) {
              parentNode.left = deleteNode.right
              return this
            } else {
              parentNode.right = deleteNode.right
              return this
            }
          } else { // 둘다있는경우
            currentNode = currentNode.right // 오른쪽한번이동
            while (currentNode.left) {
                let parentNode2 = currentNode
                currentNode = currentNode.left
              }
            parentNode2.left = null // 대체할 노드의 부모연결 삭제
            if (itsLeft) {
              parentNode.left = currentNode
              return this
            } else {
              parentNode.right = currentNode
              return this
            }
          } 
        }
      }
      return null
    }
  }
  
  
  const myTree = new BST()
  myTree.insert(5)
  myTree.insert(6)
  myTree.insert(7)
  myTree.insert(1)
  myTree.remove(3)
  
  
  
  
  function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
  }
  console.log(traverse(myTree.root))
  console.log(myTree)