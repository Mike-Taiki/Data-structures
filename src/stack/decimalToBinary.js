const Stack = require("./stack");

function decimalToBinary(num) {
  const stack = new Stack();
  let decimal = num;
  let rest = decimal;
  let binary = "";

  while (decimal !== 0) {
    rest = decimal % 2;
    decimal = Math.floor(decimal / 2);
    stack.add(rest);
  }

  while (!stack.isEmpty()) {
    binary += stack.pop();
  }

  return binary;
}

console.log(decimalToBinary(233));
console.log(decimalToBinary(10));
console.log(decimalToBinary(1000));
