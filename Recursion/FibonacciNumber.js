

// Fibonacci number
function fibNum(n){
  if(n<=1){
    return n;
  }else {
    return fibNum(n-1)+fibNum(n-2);
  }
}
console.log(fibNum(4));