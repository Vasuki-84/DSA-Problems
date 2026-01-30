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
console.log(range(1, 5));

// range(1,5) => [1,2,3,4,5]
// range(1,4) => [1,2,3,4]
// range(1,3) => [1,2,3]
// range(1,2) => [1,2]
// range(1,1) => [1]
// range(1,0) => []
