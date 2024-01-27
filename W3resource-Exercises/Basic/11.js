// 11. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]

let CtF = (c) => {
  return `Fahrenheit is: ${(9 * c + 32 * 5) / 5}`;
};
console.log(CtF(1)); //  33.8

let FtC = (f) => {
  return `Celsius is: ${(f - 32) / 1.8}`;
};
console.log(FtC(1)); // -17.22222222222
