const loveFun = (f1, f2) => {
  return f1 % 2 !== f2 % 2;
};
console.log(loveFun(2,2)); //false
console.log(loveFun(2,5)); //true