// 이진 탐색 트리는 자식 노드는 두개까지만 가질 수 있고 각 노드들은 단 하나의 부모 노드만 가지고 있으며
// 자기보다 큰 자식 노드는 오른쪽, 작으면 왼쪽에 배치하는 규칙을 가진 계층형 자료구조이다.

// lookup과 delete, insert가 이상적인 경우 O(log n) 이지만
// 나쁜 경우 O(n)까지 갈 수 있다

// O(n)보다 빠르고 크기를 늘리기 쉬우며 정렬이 되어있다는 장점이 있지만 O(1)이 없다는 단점이 있다.
// 바꿔 말하면 어느 작업에서도 다른 자료구조들 중 가장 빠르지 않다.


// 데이터에 따라 이진 트리가 비대칭이 되어 탐색할 때 앞서 말한 나쁜 경우인 O(n)이 소요될 수 있는데
// 이를 보완하기 위해 자가 균형 트리인 AVL 트리, 레드 블랙 트리가 있다. 


// 힙 트리(heap tree)는 완전 이진 트리의 하나인데 부모의 값은 자식의 값보다 항상 커야 한다는(혹은 항상 작은)
// 규칙이 추가되었다.
// 삽입, 삭제는 O(log n) 이다.
// 최댓값(혹은 최솟값)을 찾는 데에 O(1)이 들고 우선순위 큐, 힙 정렬 등에 쓰인다.

// 단어를 찾기 쉽게 만드는 Trie 라는 트리도 있다.


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

    while (currentNode) {

      if (value < currentNode.value) {
        parentNode = currentNode
        currentNode = currentNode.left
      } else if (value > currentNode.value) {
        parentNode = currentNode
        currentNode = currentNode.right
      } else if (value === currentNode.value) {
        // 찾았음
        let deleteNode = currentNode
        
        if (!deleteNode.right && !deleteNode.left) { // leaf
          if (parentNode === null) {
            this.root = null;
            return this
          }
          if (deleteNode.value < parentNode.value) {
            parentNode.left = null
            return this
          } else {
            parentNode.right = null
            return this
          }
        } else if (!deleteNode.right) { // 왼쪽 가지만 있는경우
          if (parentNode === null) {
            this.root = deleteNode.left;
            return this
          }
          if (currentNode.value < parentNode.value) {
            parentNode.left = deleteNode.left
            return this
          } else {
            parentNode.right = deleteNode.left
            return this
          }
        } else if (!deleteNode.right.left) { // 오른쪽 가지만 있는경우
          deleteNode.right.left = deleteNode.left;
          if (parentNode === null) {
            this.root = deleteNode.right;
            return this
          }
          if (currentNode.value < parentNode.value) {
            parentNode.left = deleteNode.right
            return this
          } else {
            parentNode.right = deleteNode.right
            return this
          }
        } else { // 둘다있는경우
          let parentNode2 = currentNode // 대체할 노드의 부모노드
          currentNode = currentNode.right // 오른쪽한번이동
          while (currentNode.left) {
              parentNode2 = currentNode
              currentNode = currentNode.left
            }

          parentNode2.left = currentNode.right
          currentNode.left = deleteNode.left;
          currentNode.right = deleteNode.right;

          if (parentNode === null) {
            this.root = currentNode;
            return this
          }
          if (currentNode.value < parentNode.value) {
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
myTree.insert(3)
myTree.insert(4)
myTree.insert(6)
myTree.insert(7)
myTree.insert(1)
myTree.insert(2)
myTree.insert(70)
myTree.insert(80)
myTree.insert(90)
myTree.insert(60)
myTree.remove(3)
console.log(myTree.lookup(1))




function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
// console.log(traverse(myTree.root))
console.log(myTree.root)