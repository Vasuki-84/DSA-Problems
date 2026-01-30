// Given an integer x, return true if x is palindrome, and false otherwise
// input: x=121  ===> ouput: true

function palindrome(x) {
  if (x < 0) return false;

  function reverse(num, rev) {
    if (num === 0) return rev;
    return reverse(Math.floor(num / 10), rev * 10 + (num % 10));
  }

  return x === reverse(x, 0);
}
console.log(palindrome(121));
