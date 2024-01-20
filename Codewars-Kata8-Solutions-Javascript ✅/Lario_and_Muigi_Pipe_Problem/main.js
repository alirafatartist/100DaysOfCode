const pipFix = (n) => {
  let result = [];
  for (let i = n[0]; i <= n[n.length - 1]; i++) {
    result.push(i);
  }
  return result;
};
console.log(pipFix([1, 3, 5, 7, 9])); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(pipFix([-1, 4])); // [-1, 0, 1, 2, 3, 4]
