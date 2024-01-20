// write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

// the string should start with a 1.

// a string with size 6 should return :'101010'.

// with size 4 should return : '1010'.

// with size 12 should return : '101010101010'.

// The size will always be positive and will only use whole numbers.

const Stringy = (size) => {
  let result = Array(size).fill(0);
  for (let i = 0; i < size; i++) {
    if (i % 2 == 0) {
      result[i] = 1;
    }
  }
  return result.join("");
};
console.log(Stringy(5)); // 10101
console.log(Stringy(12)); // 101010101010

// Amazing short code
const Stringy2 = (size) => {
  return Array(size)
    .fill(0)
    .map((x, index) => (index % 2 == 0 ? 1 : 0))
    .join("");
};
console.log(Stringy2(6)); // 101010
console.log(Stringy2(7)); // 1010101
