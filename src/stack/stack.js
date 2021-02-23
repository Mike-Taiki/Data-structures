class Stack {
  constructor() {
    this.items = [];
  }

  // verify if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Add an element to the top of stack
  add(...items) {
    this.items.push(...items);
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  // Remove the element of the top of stack and return it
  remove() {
    const lastElement = this.items[this.items.length - 1];
    this.items.pop();
    return lastElement;
  }

  // erase the stack
  clear() {
    this.items = [];
  }

  // return the size of the stack
  size() {
    return this.items.length;
  }
}

const stack = new Stack();
stack.add(5);
stack.add(7, 9, 10);

console.log(stack.peek());
console.log(stack.remove());
console.log(stack.peek());
