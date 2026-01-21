// Q3 - Remove Duplicates from sorted array
// Given an integer array nums sorted in non-descending order , remove
// the duplicates in place9 we cannot create new array) such that each unique element appears
// only once. The relaive order of the elements should be kept
// the same . Then return the number of unique elements in nums.

// Input: [1,1,2]     ==> output: 2, [1,2,_]
// Input: [0,0,1,1,1,2,2,3,3,4]   ==> output: 5, [0,1,2,3,4,_,_,_,_,_]

// const removeDuplicate = (nums) => {
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (nums[i] === nums[i + 1]) {
//       nums.splice(i + 1, 1);
//       i--;
//     }
//   }
//   return nums;
// };
// console.log(removeDuplicate([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

// without inbuilt methods in JS
function removeDuplicates(nums) {
  if (nums.length === 0) return 0;

  let i = 0;
  for (let j = 1; j < nums.length; j++) { 
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return nums;
}
console.log(removeDuplicates([0, 0, 2, 2, 4, 4, 5, 6, 6]));
