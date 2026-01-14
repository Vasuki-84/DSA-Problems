// Array - declaration
//1. let arr = new Array();
//2. let arr1 =[];

// adding elements in tha array
let arr = ["apple", "orange", "banana"];
// accessing elements in the array
console.log(arr[0]);
// to find array length
console.log(arr.length);

// insert object inside an array
let person = {
  name: "JS",
  age: 23,
};
let arr1 = ["apple", "orange", "banana", person];
console.log(arr1[3].name);

// methods in array
arr.push("guava");
console.log(arr);
arr.pop();
console.log(arr);
arr.unshift("grapes");
console.log(arr);
arr.shift();
console.log(arr);

// Looping in array
// 1. for loop

let arr2 = ["C", "C++", "Java", "JS"];
for (let i = 0; i < arr2.length; i++) {
  console.log(arr2[i]);
}

// 2. While loop
let i = 0;
while (i < arr2.length) {
  console.log(arr2[i]);
  i++;
}

// Inbuilt loop methods

const numbers = [1, 2, 3, 4, 5, 6];

// map
const newNumbers = numbers.map((items, index, array) => {
  return items + 5;
});
console.log(newNumbers);

// filter
const filter = numbers.filter((items, index, array) => {
  return items < 4;
});
console.log(filter);

// reduce
const sum = numbers.reduce((prev, next) => {
  return prev + next;
}, 0);
console.log(sum);

// some method
const some = numbers.some((items, i, array) => {
  return items > 3;
});
console.log(some);

// every method
const every = numbers.every((items, i, array) => {
  return items > 3;
});
console.log(every);

// find method
const find = numbers.find((items, i, array) => {
  return items > 3;
});
console.log(find);


