const Calculate_average = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return arr.length === 0 ? 0 : sum / arr.length;
};
console.log(Calculate_average([1, 2, 3, 4])); //the average is 2.5
