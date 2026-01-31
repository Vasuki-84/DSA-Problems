

// Subsets ( Backtracting algorithm using Recursion)
// Given an integer array nums of unique elements , returns all possible subsets (the power set),
// The solution set must not contain duplicate subsets, return the solution in any order.

// Input: [1,2,3]  ouput: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// Input: [0]  output: [[],[0]]

function subsets(nums,i){
    let result=[];
    let temp=[];

    function recursiveSubsets(nums,i){
if(i=== nums.length){
    return result.push([...temp]);
}
temp.push(nums[i])
recursiveSubsets(nums,i+1);
temp.pop();
recursiveSubsets(nums,i+1);
    }
    recursiveSubsets(nums,0);
    return result;
}
console.log(subsets([1,2,3]));