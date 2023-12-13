let height = undefined;
let result;

function calculatekHeight(height) {
  return (result = height ?? "Height is not defined");
}

console.log(calculatekHeight(result));
//  Result ควรจะได้ออกมาเป็น “Height is not defined”
