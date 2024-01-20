const Unfinished_Loop = (n) => {
  let resultArray = [];
  for (let i = 0; i <= n; i++) {
    resultArray.push(i);
  }
  return resultArray;
};
console.log(Unfinished_Loop(5)); //[0, 1, 2, 3, 4, 5]
