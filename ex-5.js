function sum(...numbers) {
  // Start coding here !
  // Return ออกไปเป็นผลรวมของตัวเลขที่ส่งเข้ามาจาก Parameter ทั้งหมด
  return numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
}

let result1 = sum(1, 2, 3, 4, 5, 6, 7, 8);
let result2 = sum(1, 2, 3, 4);

console.log(`Result ${result1}`);
console.log(`Result ${result2}`);
