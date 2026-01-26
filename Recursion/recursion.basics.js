// function frnd1() {
//   return frnd2();
// }
// function frnd2() {
//   return frnd3();
// }
// function frnd3() {
//   return frnd4();
// }
// function frnd4() {
//   return frnd5();
// }
// function frnd5() {
//   return true;
// }
// console.log(frnd1());

// function recursion(person) {
//   if (person === 5) return true;
//   console.log(person);
//   return recursion(person + 1);
// }
// console.log("outcome:", recursion(1));

// without recusion
function multiply(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
  }
  return product;
}
console.log(multiply([1, 2, 3, 4]));

// with Recursion
function withRecursion(arr) {
  console.log(arr);
  if (arr.length <= 0) {
    return 1;
  } else {
    return arr[arr.length - 1] * withRecursion(arr.slice(0, arr.length - 1));
  }
}
console.log(withRecursion([1, 2, 3, 4]));
