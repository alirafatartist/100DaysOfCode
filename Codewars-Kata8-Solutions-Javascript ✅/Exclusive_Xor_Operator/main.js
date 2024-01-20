const xor = (a, b) => {
  return a == b ? false : true;
};
console.log(xor(true, true)); //false
console.log(xor(false, false)); //false
console.log(xor(true, false)); //true
console.log(xor(false, true)); //true
