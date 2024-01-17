const What_is_between = (a, b) => {
  let result = [];
  for (let i = a; i <= b; i++) {
    result.push(i);
  }
  return result;
};
console.log(What_is_between(1, 4)); //[1, 2, 3, 4]

// Way2
const What_is_between2 = (a, b) => {
  return Array(b - a + 1)
    .fill(a)
    .map((x, index) => x + index);
};
console.log(What_is_between2(0, 5)); //[0, 1, 2, 3, 4, 5]
