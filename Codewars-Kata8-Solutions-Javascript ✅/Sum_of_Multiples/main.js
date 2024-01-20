const Sum_of_Multiples = (n, m) => {
  let result = [];
  for (let i = 1; i < m; i++) {
    result.push(i * n);
  }
  return m == 0 || m < 0
    ? "INVALID"
    : result.filter((x) => x < m).reduce((acc, current) => acc + current);
};
console.log(Sum_of_Multiples(2, 9)); // 20
console.log(Sum_of_Multiples(3, 13)); // 30
console.log(Sum_of_Multiples(4, 123)); // 1860
console.log(Sum_of_Multiples(4, -7)); // INVALID
console.log(Sum_of_Multiples(0, 0)); // INVALID

// Way2
const Sum_of_Multiples2 = (n, m) => {
  let result = 0;
  for (let i = n; i < m; i += n) {
    result += i;
  }
  return (result == 0 ? "INVALID" : result);
};
console.log(Sum_of_Multiples2(2, 9)); // 20
console.log(Sum_of_Multiples2(3, 13)); // 30
console.log(Sum_of_Multiples2(4, 123)); // 1860
console.log(Sum_of_Multiples2(4, -7)); // INVALID
console.log(Sum_of_Multiples2(0, 0)); // INVALID
