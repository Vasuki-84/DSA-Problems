// const revStr = (str) => (str.length === 0 ? "" : revStr(str.slice(1)) + str[0]);
// console.log(revStr("hello"));

// const revString = (str) =>
//   str.length === 0 ? "" : revString(str.slice(1)) + str[0];

// console.log(revString("vasu"));

function revStr(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result = result + str[i];
  }
  return result;
}
console.log(revStr("hello"));

