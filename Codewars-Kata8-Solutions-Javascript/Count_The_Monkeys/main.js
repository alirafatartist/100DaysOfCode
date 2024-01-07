const Count_The_Monkeys = (n) => {
  let resultArray = [];
  for (let i = 1; i <= n; i++) {
    resultArray.push(i);
  }
  return resultArray;
};
console.log(Count_The_Monkeys(10));
