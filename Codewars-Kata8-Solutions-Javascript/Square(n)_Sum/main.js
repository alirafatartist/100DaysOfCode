const SquareSum = (arr) => {
  return arr.map((x) => x ** 2).reduce((acc, current) => acc + current);
};
console.log(SquareSum([1, 2, 3, 4])); // 1^2 + 2^2 + 2^2 + 3^2 + 4^2 = 30
