//1. Stack DSA: follows FIFO (First IN First Out) rule

const arr = [1, 2, 3, 4];
const removeLastElement = function () {
  if (arr.length === 0) {
    console.log("empty");
    return 0;
  }
  lastIndex = arr.length - 1; // 4-1 =3
  lastValue = arr[lastIndex]; // arr[3] =4
  arr.length = arr.length - 1;
  return lastValue;
};
console.log(arr);
console.log(removeLastElement());
console.log(arr);
console.log(removeLastElement());
console.log(arr);
console.log(removeLastElement());
console.log(arr);
console.log(removeLastElement());
console.log(arr);
console.log(removeLastElement());


