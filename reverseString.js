const revStr = (str) => (str.length === 0 ? "" : revStr(str.slice(1)) + str[0]);
console.log(revStr("hello"));

const revString = (str) =>
  str.length === 0 ? "" : revString(str.slice(1)) + str[0];

console.log(revString("vasu"));
