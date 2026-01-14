// Time complexity:

/* O(1)-fast:
 number of operations remains same even the 
input changes,time is also remains same */

function someOperation(n) {
  // 3 operations
  return (n * (n + 5)) / 2;
}
console.log(someOperation(2));

/* o(N)-slow: number of operations changes w.r.t input, time also changes in constant way*/
console.log("O(N)");
function GoingUpDown(n) {
  //  7 operations
  console.log("going forward");
  for (var i = 0; i < n; i++) {
    console.log(i);
  }
  console.log("At the end, going back");
  for (var j = n - 1; j >= 0; j--) {
    console.log(j);
  }
  console.log("At the Start!");
}
console.log(GoingUpDown(2));

/* O(N^2) number of operations changes w.r.t input, time also changes in quadratic way */
console.log("O(n^2) - time complexity");
function printBoth(n) {
  // n*n (or) n^2  operations
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}
console.log(printBoth(2));


// space complexity:

/* O(1) space complexity = The output remains same & occupies small space even the input is changed*/
const funnyNumber = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};
let score = [420, 96, 12, 69, 77];
console.log("o(1):", funnyNumber(score));

/* O(n) space complexity = The output changes & occupies large space when the input is changed*/
const funnyNumberArray = (n) => {
  const array = [];
  for (let i = 0; i < n; i++) {
    array.push(i * 69);
  }
  return array;
};
console.log("o(n):", funnyNumberArray(4));

/* O(n^2) space complexity = it gives exponential output when tha input is changed  */
function createMatrix(n) {
  let matrix = [];
  for (let i = 0; i < n; i++) {
    matrix[i] = [];
    for (let j = 0; j < n; j++) {
      matrix[i][j] = i + j;
    }
  }
  return matrix;
}
const matrix = console.log("O(n^2):", createMatrix(2));
console.log(matrix);
