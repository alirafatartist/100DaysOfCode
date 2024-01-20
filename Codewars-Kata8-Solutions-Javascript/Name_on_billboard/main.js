// you shouldn't use "*" operator

const Name_on_billboard = (str, n = 30) => {
  let result = 0;
  for (let i = 0; i < n; i++) {
    result += str.length;
  }
  return result;
};
console.log(Name_on_billboard("ahmed")); // 150
console.log(Name_on_billboard("anani fridumar")); // 420

// Way2
const Name_on_billboard2 = (str, n = 30) => {
  let result = str
    .split("")
    .map((x) => n)
    .reduce((acc, current) => acc + current);

  return result;
};
console.log(Name_on_billboard2("ahmed")); // 150
console.log(Name_on_billboard2("anani fridumar")); // 420
