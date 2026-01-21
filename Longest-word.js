function longestWord(sentence) {
  let word = "";
  let longest = "";

  for (let i = 0; i <= sentence.length; i++) {
    if (sentence[i] !== " " && i !== sentence.length) {
      word = word + sentence[i];
    } else {
      if (word.length > longest.length) {
        longest = word;
      }
      word = "";
    }
  }
  return longest;
}

console.log(longestWord("I love javascript programming"));
