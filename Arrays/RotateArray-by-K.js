// Q2: Rotate array by K
// Given an integer array nums, rotate the array to the right by K steps, where K is non-negative

// Input: nums = [1,2,3,4,5,6,7], k=3 ===> ouput : [5,6,7,1,2,3,4]
// Input: nums = [-1,-100,3,99] , k=2  ===> ouput: [3,99,-1,-100]

// Explanation for k=3
// [1,2,3,4,5,6,7] ==> [7,1,2,3,4,5,6] ==> [7,6,1,2,3,4,5] ==> [7,6,5,1,2,3,4 ]

// oridinary solution
function rotateArray(nums, k) {
  let size = nums.length;

  if (k > size) {
    k = k % size; // 8%7 =1
  }
  const rotated = nums.splice(size - k, size);
  nums.unshift(...rotated);
  return nums;
}
console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 8));

// optimzed solution
function rotateArrayOptimized(nums, k) {
  let size = nums.length;
  if (k > size) {
    k = k % size;
  }
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);

  return nums;
}
function reverse(nums, left, right) {
  while (left < right) {  // 0<6
    const temp = nums[left];  // temp = 1
    nums[left++] = nums[right]; // 1 = 4
    nums[right--] = temp;  // 3 = 1
  }
}
console.log(rotateArrayOptimized([1, 2, 3, 4], 3));
