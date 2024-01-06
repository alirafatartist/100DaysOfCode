const Count_By_X = (x, n) => {
  let resultArray = [];
  for (let i = x; i <= n; i++) {
    resultArray.push(x * i);
  }
  return resultArray;
};
console.log(Count_By_X(2, 5)); //[2,4,6,8,10]
