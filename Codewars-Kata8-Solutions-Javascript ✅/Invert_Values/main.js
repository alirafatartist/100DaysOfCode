const Invert_Values = (arr) => {
  let resultArray = [];
  for (let i = 0; i < arr.length; i++) {
    resultArray.push(-1 * arr[i]);
  }
  return resultArray;
};
console.log(Invert_Values([1, -2, 6, 8, 9, -10, -11, -18])); //[-1, 2, -6, -8, -9, 10, 11, 18]

// Amazing Short Code

const Invert_Values2 = (arr) => {
  return arr.map((x) => x * -1);
};
console.log(Invert_Values2([1, -2, 6, 8, 9, -10, -11, -18])); //[-1, 2, -6, -8, -9, 10, 11, 18]
