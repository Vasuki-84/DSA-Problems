
// LeetCode 1480 – Running Sum of 1D Array
let runningSum = function(nums) {
   for(let i=1;i<nums.length;i++){
    nums[i]=nums[i]+nums[i-1];
   
   }
   return nums;
    
};
console.log(runningSum([1,1,1]));