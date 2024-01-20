const Fake_Binary = (str) => {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] < 5) {
      result += 0;
    } else {
      result += 1;
    }
  }
  return result;
};
console.log(Fake_Binary("12345678")); //00001111

// Way2
const Fake_Binary2 = (str) => {
  return str
    .split("")
    .map((x) => (x < 5 ? 0 : 1))
    .join(""); //[0, 0, 0, 0, 1, 1, 1, 1]=>join=00001111
};
console.log(Fake_Binary2("12345678")); //00001111
