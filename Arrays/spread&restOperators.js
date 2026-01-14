// Spread & Rest operators in Arrays
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];

// Spread operator
const finalNums = [...num1, ...num2];
console.log(finalNums);

// Rest operator
function sum(...numbers) {
  return numbers;
}
console.log(sum(num1, num2, 8, "hello"));
