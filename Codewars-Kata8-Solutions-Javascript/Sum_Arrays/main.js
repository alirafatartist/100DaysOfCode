const Sum_Arrays = (arr) => {
  let result = 0;
  if (arr == null) {
    return 0;
  } else {
    for (let i = 0; i < arr.length; i++) {
      result += arr[i];
    }
    return result;
  }
};
console.log(Sum_Arrays([1, 5, 6, 8])); //20
console.log(Sum_Arrays([])); //0

// Way2
const Sum_Arrays2 = (arr) => {
  return arr == null ? 0 : arr.reduce((acc, current) => acc + current);
};
console.log(Sum_Arrays2([1, 5, 6, 8])); //20
console.log(Sum_Arrays2()); //0
