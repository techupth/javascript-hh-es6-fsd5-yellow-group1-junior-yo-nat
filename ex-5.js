function sum() {
  // Start coding here !
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    result = arguments[i] + result;
  }
  return result;
}

let result1 = sum(1, 2, 3, 4, 5, 6, 7, 8);
let result2 = sum(1, 2, 3, 4);

console.log(`Result ${result1}`);
console.log(`Result ${result2}`);
