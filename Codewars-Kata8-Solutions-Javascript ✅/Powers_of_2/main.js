const Powers_of_2 = (n) => {
  let result = [];
  for (let i = 0; i <= n; i++) {
    result.push(2 ** i);
  }
  return result;
};
console.log(Powers_of_2(4)); // [1, 2, 4, 8, 16]

// Way2
const Powers_of_2_ = (n) => {
  return Array(n + 1)
    .fill(0)
    .map((_, index) => 2 ** index);
};
console.log(Powers_of_2_(5)); // [1, 2, 4, 8, 16, 32]
