const Reversed_Words = (str) => {
  return str.split(" ").reverse().join(" ");
};
console.log(Reversed_Words("Hello i'm cristiano ronaldo")); // ronaldo cristiano i'm Hello

// Way2
const Reversed_Words2 = (str) => {
  let result = "";
  for (let i = str.split(" ").length - 1; i >= 0; i--) {
    result += " " + str.split(" ")[i];
  }
  return result.trim();
};
console.log(Reversed_Words2("Hello i'm cristiano ronaldo")); // ronaldo cristiano i'm Hello
