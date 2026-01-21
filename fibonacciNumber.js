// Q2 : Fibonacci number
// Ficonacci series -> 0 , 1, 1, 2, 3, 5, 8, 13,21, 34, 55, 89, 144, 233....
// F(0)=0, F(1)=1
// F(n) = F(n-1) + F(n-2) > 1

// Input : n = 3 ( 0, 1, 1) ===> Output: 2

// Using array , for loop

var fib = function (n) {
  const arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr[n];
};
const res = fib(4);
console.log(res);

// using recursion
// Recursion = A function calling itself.

// var fib = function (n) {
//   if (n <= 1) return n;
//   return fib(n - 1) + fib(n - 2);
// };
// console.log(fib(3));

// n=3 -> 3<=1 -> 3 -> fib(3-1)+fib(3-2) -> fib(2)+fib(1)  -> 1 + 1 -> 2
// fib(2) -> fib(2-1)+fib(2-2) -> fib(1)+fib(0) -> 1 + 0 -> 1
// fib(1) -> not returns any values terminates

// const fib = (n) => (n <= 1 ? n : fib(n - 1) + fib(n - 2));
// console.log(fib(6));

// sum of n numbers:

// const sum = function (n) {
//   if (n === 1) return n;
//   return n + sum(n - 1);
// };
// console.log(sum(4));

const revStr = (str) => (str.length === 0 ? "" : revStr(str.slice(1)) + str[0]);
console.log(revStr("hello"));

var fibNum = function (n) {
  const arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr[n];
};
const answer = fibNum(4);
console.log(answer);

const fibN = (n) => (n <= 1 ? n : fibN(n- 1) + fibN(n - 2));
console.log(fibN(3));
