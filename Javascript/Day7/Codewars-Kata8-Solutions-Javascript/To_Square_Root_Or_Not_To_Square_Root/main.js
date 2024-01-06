const To_Square_Root_Or_Not_To_Square_Root = (arr) => {
  let resultArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % Math.sqrt(arr[i]) === 0) {
      resultArray.push(Math.sqrt(arr[i]));
    } else {
      resultArray.push(arr[i] ** 2);
    }
  }
  return resultArray;
};
console.log(To_Square_Root_Or_Not_To_Square_Root([4, 3, 9, 7, 2, 1])); //[2, 9, 3, 49, 4, 1]
