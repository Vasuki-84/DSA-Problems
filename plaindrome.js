// Q1: palindrome number
// An integer is a palindrome when it needs the same forword nad backward.

// input : x = 122 ----> false
// input : x = 121 ----> true

const isPalindrome = function (x) {
  return x < 0 ? false : x === +x.toString().split("").reverse().join("");
};
const answer = isPalindrome(121);
console.log(answer);

// 121 -> "121" -> ["1","2","2"]  -> ["2","2","1"]-> "121"
// +x => changes into number
// use if else condtion for not entering number

const palin = (num)=>{
   num.toString().split("").reverse().join("");
return true;
}
console.log(palin(121));

const palinNum = (num)=>  num < 0 ? false : num === +num.toString().split("").reverse().join("");
console.log(palinNum(999));


function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false 