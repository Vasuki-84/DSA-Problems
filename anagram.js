// Ques : 3
// An anagram is a word or phrase formed by rearranging the letters of a different
// word or phrase , using all the original letters exactly once.

// Input : (s= "anagram"), (t= "nagaram") --> o/p - true
// Input : (s = "rat") , (t = "car") -- > o/p - false

// 1st approach
// const isAnagram = function (s, t) {
//   s = s.split("").sort().join("");
//   t = t.split("").sort().join("");
//   return s === t;
// };
// console.log(isAnagram("anagram", "nagaram"));

// anagram =  ["a","n","a","g","r","a","m"] => [a,a,a,g,m,n,r] => aaagmnr
// nagaram =  [ "n","a","g","a","r","a","m"] => [a,a,a,m,n,r] => aaagmnr

// 2nd approach using object
const isAnagram1 = (s, t) => {
  if (s.length !== t.length) return false;

  let obj1 = {};
  let obj2 = {};

  for (let i = 0; i < s.length; i++) {
    obj1[s[i]] = (obj1[s[i]] || 0) + 1;
    obj2[t[i]] = (obj2[t[i]] || 0) + 1;
  }

  for (const key in obj1) {
    if (obj1[key] !== obj2[key]) return false;
  }
  return true;
};
console.log(isAnagram1("anagram", "agaram"));

