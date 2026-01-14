// concat

const num1 = [1, 2, 3];
const num2 = [4, 5, 6, 7];
const num3 = [7, 8, 9];

const concat = num1.concat(num2, num3);
console.log(concat);

// Slice
console.log(num1.slice(-2, 2));

// splice
num2.splice(1, 2, "five", "six");
console.log(num2);

// fill
const dummy = [1, 2, 4, 4];
dummy.fill(4);
console.log(dummy);

// findindex
const findIndex = num3.findIndex((item) => item === 7);
console.log(findIndex);

// flat
const numbers = [1, [1, 2], [[3, 4], 2], 4];
const flat = numbers.flat(2);
console.log(flat);

// reverse
console.log(num1);
num1.reverse();
console.log(num1);

// sort
const unsort = [4,2,5,7,9];
unsort.sort((a,b)=>b-a);
console.log(unsort);