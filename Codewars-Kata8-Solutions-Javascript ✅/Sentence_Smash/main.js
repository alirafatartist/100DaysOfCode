const Sentence_Smash = (arr) => {
  let sentence = "";
  for (let i = 0; i < arr.length; i++) {
    sentence += arr[i] + " ";
  }
  return sentence;
};
console.log(Sentence_Smash(["Hello", "World", "this", "is", "a", "great"])); // Hello world this is a great

// Amazing Short Code
const Sentence_Smash2 = (arr) => {
  arr.join(" ");
};
console.log(Sentence_Smash2(["Hello", "World", "this", "is", "a", "great"])); // Hello world this is a great
