let reverse = (str) => {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    result.push(str[i]);
  }
  return result.reverse().join("");
};
console.log(reverse("hello")); //olleh

// Way2
let reverse2 = (str) => {
  return [...str].reverse().join("");
};
console.log(reverse2("hello")); //olleh

// Way3
let reverse3 = (str) => {
  return str.split("").reverse().join("");
};
console.log(reverse3("hello")); //olleh

// Way4
let reverse4 = (str) => {
  let result = [];
  for (let i = str.length; i >= 0; i--) {
    result.push(str[i]);
  }
  return result.join("");
};
console.log(reverse4("hello")); //olleh

// Way5
let reverse5 = (str) => {
  return str.split("").reduce((acc, current) => current + acc);
};
console.log(reverse5("hello")); //olleh
