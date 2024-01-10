const No_Zeros_For_Heros = (n) => {
  let n2string = `${n}`;
  while (n2string.lastIndexOf("0") === n2string.length - 1) {
    n2string = n2string.slice(0, n2string.length - 1);
  }
  return Number(n2string);
};
console.log(No_Zeros_For_Heros(1900)); //19
console.log(No_Zeros_For_Heros(1090)); //109
console.log(No_Zeros_For_Heros(190)); //19
console.log(No_Zeros_For_Heros(14153590000000)); //1415359

// Amazing Short Code
const No_Zeros_For_Heros2 = (n) => {
  let n2string = `${n}`;
  while (n2string.endsWith("0")) {
    n2string = n2string.slice(0, n2string.length - 1);
  }
  return Number(n2string);
};
console.log(No_Zeros_For_Heros2(1900)); //19
console.log(No_Zeros_For_Heros2(1090)); //109
console.log(No_Zeros_For_Heros2(190)); //19
console.log(No_Zeros_For_Heros2(14153590000000)); //1415359
