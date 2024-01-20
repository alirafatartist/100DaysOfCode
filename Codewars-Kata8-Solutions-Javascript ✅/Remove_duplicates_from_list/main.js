const Remove_duplicates_from_list = (arr) => {
  let array = new Set(arr);
  return [...array];
};
console.log(Remove_duplicates_from_list([1, 2, 1, 5, 6, 7, 7, 5, 6, 9, 8])); //[1, 2, 5, 6, 7, 9, 8]

// Way2
const Remove_duplicates_from_list2 = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (result.includes(arr[i]) == !true) {
      result.push(arr[i]);
    }
  }
  return result;
};
console.log(Remove_duplicates_from_list2([1, 2, 1, 5, 6, 7, 7, 5, 6, 9, 8])); //[1, 2, 5, 6, 7, 9, 8]

// Way3
const Remove_duplicates_from_list3 = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) == -1) {
      result.push(arr[i]);
    }
  }
  return result;
};
console.log(Remove_duplicates_from_list3([1, 2, 1, 5, 6, 7, 7, 5, 6, 9, 8])); //[1, 2, 5, 6, 7, 9, 8]
