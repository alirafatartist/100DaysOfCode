// 31. Write a JavaScript program to find the largest of three given integers.

let find = (a, b, c) => {
  return Math.max(a, b, c);
};
console.log(find(10, 20, 25)); //25
console.log(find(0, -10, -20)); //0

// Way2 custom
let find2 = (a, b, c) => {
  let max_val = "";
  if (a > b) {
    max_val = a;
  } else {
    max_val = b;
  }
  if (c > max_val) {
    max_val = c;
  }
  return max_val;
};
console.log(find2(17, 10, 25)); //25
console.log(find2(0, -10, -20)); //0
