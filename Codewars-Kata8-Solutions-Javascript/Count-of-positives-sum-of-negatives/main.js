const Count_of_positives_sum_of_negatives = (arr) => {
  let a = 0;
  let b = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      a++;
    } else {
      b += arr[i];
    }
  }
  return [a, b];
};
console.log(
  Count_of_positives_sum_of_negatives([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
  ])
); //[10,-65]
