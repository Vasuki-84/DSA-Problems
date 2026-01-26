// Q2- Create an array with range of numbers
// Input: start-1 , end-5

function range(start, end) {
  if (end < start) {
    return [];
  } else {
    const numbers = range(start, end - 1);
    numbers.push(end);
    return numbers;
  }
}
console.log(range(0, 5));
