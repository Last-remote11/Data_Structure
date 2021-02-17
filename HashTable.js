// 해시 테이블은 들어으는 key를 해시 함수라는 것을 통해 고유한 index를 만들어내어 그 장소에 저장하는 것이다.
// search, insert, delete 가 O(1) 으로 아주 빠름
// 대신 기본적으로 sort가 없고 key를 다 불러오는게 느리다


class HashTable {
  constructor(size){
    this.data = new Array(size)
  }

  _hash(key) {
    let hash = 0
    for (let i=0; i<key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash
  }

  set(key, value) {
    let address = this._hash(key)
    if (!this.data[address]) {
      this.data[address] = []
    }
    this.data[address].push([key, value])    
  }

  get(key) {
    let current = this.data[this._hash(key)]
    for (let i=0; i<current.length; i++) {
      if (current[i][0] === key) {
        return current[i][1]
      }
    }
  }

// [[key, value], [key, value]]
  keys() {
    let ans = []
    for (let i=0; i < this.data.length; i++) {
      if (this.data[i]) {
        for (let j=0; j < this.data[i].length; j++) {
        ans.push(this.data[i][j][0])
      }
      }
    }
    return ans
  }
}

// let myTable = new HashTable(50)

// myTable.set('hi', true)
// myTable.set(123, 456)
// myTable.set('orange', 100)
// console.log(myTable.keys())


const recur = (arr) => {
  let mySet = new Set()
  for (let i=0; i < arr.length; i++) {
    if (mySet.has(arr[i])) {
      return arr[i]
    } else {
      mySet.add(arr[i])
    }
  }
  return undefined
}

console.log(recur([1,2,1,4,7,6,7,9,8]))