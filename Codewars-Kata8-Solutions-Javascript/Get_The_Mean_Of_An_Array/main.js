const getAverage = (marks) => {
  let total = 0;
  for (let i = 0; i < marks.length; i++) {
    total += marks[i];
  }
  return total / marks.length;
};
console.log(getAverage([2, 2, 2, 2])); //2
console.log(getAverage([2, 1, 0, 6])); //2.25
console.log(getAverage([1, 2, 3, 4, 5])); //3
