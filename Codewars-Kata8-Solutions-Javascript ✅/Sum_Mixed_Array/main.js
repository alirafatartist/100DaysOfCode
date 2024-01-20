const Sum_Mixed_Arra = (arr) => {
  return arr.map((x) => Number(x)).reduce((acc, current) => acc + current);
};
console.log(Sum_Mixed_Arra([1, "2", "3", 7, 9, "6"])); //28

// Way2
const Sum_Mixed_Arra2 = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(Number(arr[i]));
  }
  return result.reduce((acc, current) => acc + current);
};
console.log(Sum_Mixed_Arra2([1, "2", "3", 7, 9, "6"])); //28

// Way3
const Sum_Mixed_Arra3 = (arr) => {
    return arr.map((x) => +x).reduce((acc, current) => acc + current);
  };
  console.log(Sum_Mixed_Arra3([1, "2", "3", 7, 9, "6"])); //28
