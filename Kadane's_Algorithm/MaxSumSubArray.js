// Given an integer array nums,find the subarray with the largest sum,
// and return its sum.

// Input: [-2,1,-3,4,-1,2,1,-5,4]  ==> ouput:  6,  [4,-1,2,1]
// Input: [5,4,-1,7,8]             ==>  output: 23 ,  [5,4,-1,7,8]

// Brute-force solution
// function maxSubArray(nums) {
//   let maxSum = nums[0];
//   let startIndex = 0;
//   let endIndex = 0;

//   for (let i = 0; i < nums.length; i++) {
//     let currentSum = 0;
//     for (let j = i; j < nums.length; j++) {
//       currentSum = currentSum + nums[j];
//       if (currentSum > maxSum) {
//         maxSum = currentSum;
//         startIndex = i;
//         endIndex = j;
//       }
//     }
//   }
//   return { sum: maxSum, subArray: nums.slice(startIndex, endIndex + 1) };
// }
// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// Kadane's algorithm

function maxSubArray(nums) {
  let sum = 0;
  let max = nums[0];

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum > max) {
      max = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
  }
  return max;
}
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
