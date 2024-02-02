// 58. Write a JavaScript program to create an updated string of 4 copies of the last 3 characters of a given original string. The string length must be 3 and above.
let creat = (str, n) => {
  let result = "";
  if (n < 0 || str.length <= 3) {
    return false;
  }
  for (let i = 0; i < n; i++) {
    result += str.substring(str.length - 3);
  }
  return result;
};
console.log(creat("Python", 5)); // honhonhonhonhon
console.log(creat("Python 3.0", 5)); // 3.03.03.03.03.0
console.log(creat("JS", 5)); // false
console.log(creat("JavaScript", 5)); // iptiptiptiptipt

//   Way2
let creat2 = (str, n) => {
  return n < 0 || str.length <= 3
    ? false
    : str.substring(str.length - 3).repeat(n);
};
console.log(creat2("Python", 5)); // honhonhonhonhon
console.log(creat2("Python 3.0", 5)); // 3.03.03.03.03.0
console.log(creat2("JS", 5)); // false
console.log(creat2("JavaScript", 5)); // iptiptiptiptipt
