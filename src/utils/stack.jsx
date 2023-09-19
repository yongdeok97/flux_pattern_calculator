export class Stack {
  constructor() {
    this.arr = [];
    this.index = 0;
  }
  push(item) {
    this.arr[this.index++] = item;
  }
  pop() {
    if (this.index <= 0) return null;
    const result = this.arr[--this.index];
    return result;
  }
  isEmpty() {
    return this.index === 0 ? true : false;
  }
  peek() {
    return this.arr[this.index];
  }
}
