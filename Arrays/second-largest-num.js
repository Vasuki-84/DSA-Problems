// 1. second largest number
// Given an array of size N ,print the second largest number from an array

// Input : [12,35,1,10,34,1] ====> output: 34
// Input : [10,5,10]  ===> output: 5

// Input : [12,35,1,10,34,1] = [1,1,10,12,34,35]

// Brute force method

function secondLargest(arr) {
  const uniqueArr = Array.from(new Set(arr)); // [10,5]
  uniqueArr.sort((a, b) => b - a); // [10,5]
  if (uniqueArr.length >= 2) {
    return uniqueArr[1]; // 5
  } else {
    return -1;
  }
}
console.log(secondLargest([10, 5, 10]));

// optimized form
function secondLargestOptimized(arr) {
  let largest = Number.NEGATIVE_INFINITY;
  let secondLargest = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] != largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}
console.log(secondLargestOptimized([-3, -2, 3]));

// Third largest number - Leetcode Problem
function thirdlargest(arr1) {
  let first = Number.NEGATIVE_INFINITY;
  let second = Number.NEGATIVE_INFINITY;
  let third = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] > first) {
      third = second;
      second = first;
      first = arr1[i];
    } else if (arr1[i] !== first && arr1[i] > second) {
      third = second;
      second = arr1[i];
    } else if (arr1[i] !== first && arr1[i] !== second && arr1[i] > third) {
      third = arr1[i];
    }
  }
  return third === null ? first : third;
}
console.log(thirdlargest([2, 2, 1, 3]));
