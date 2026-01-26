// Factorial of Number

//Q1-  Factorial of 5 = 5*4*3*2*1 = 120

function Factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * Factorial(n - 1);
  }
}
console.log(Factorial(3));
