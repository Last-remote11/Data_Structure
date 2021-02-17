// big O of Array
// access : O(1)
// insert : O(n)
// search : O(n)
// delete : O(n)

// Array는 index별로 해당되는 값을 저장하여 access가 아주 빠르지만
// 특정 값을 찾거나 중간에 있는 성분을 삭제하거나 추가하는 것은 느리다.
// (뒤에 있는 성분들의 index를 다 바꿔주어야 하므로)


class MyArray {
    constructor() {
      this.length = 0;
      this.data = {};
    }
  
    get(index) {
      return this.data[index]
    }
  
    push(item) {
      this.data[this.length] = item;
      this.length++;
      return this.length;
    }
  
    pop() {
      const lastItem = this.data[this.length-1];
      delete this.data[this.length-1];
      this.length--;
      return lastItem;
    }
  }
  
  const newArray = new MyArray();
  newArray.push('hi');
  newArray.push('!');
  newArray.pop();
  console.log(newArray);