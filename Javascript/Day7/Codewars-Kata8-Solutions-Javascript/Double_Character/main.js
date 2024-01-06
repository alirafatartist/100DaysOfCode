const Double_Character = (str) => {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result += str[i].repeat(2);
  }
  return result;
};
console.log(Double_Character("string")); //ssttrriinngg
