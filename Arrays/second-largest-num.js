// 1. second largest number
// Given an array of size N ,print the second largest number from an array

// Input : [12,35,1,10,34,1] ====> output: 34
// Input : [10,5,10]  ===> output: 5

// Input : [12,35,1,10,34,1] = [1,1,10,12,34,35]

function secondLargest(arr) {
  const uniqueArr = Array.from(new Set(arr)); // [10,5]
  uniqueArr.sort((a, b) => b - a); // [10,5]
  if (uniqueArr.length >= 2) {
    return uniqueArr[1]; // 5
  } else {
    return -1;
  }
}
console.log(secondLargest([10,5,10]));
