const index = (arr, n) => {
  return (arr[n] == null ? -1 : arr[n] ** n);
};
console.log(index([1, 2, 3, 4], 2)); //9
console.log(index([1, 2, 3, 4], 5)); //-1
console.log(index([1, 2, 3, 4], 4)); //-1
