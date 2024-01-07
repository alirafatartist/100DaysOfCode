const Convert_a_Number_to_a_String = (num) => {
  return "" + num;
};
console.log(typeof Convert_a_Number_to_a_String(6.7)); //6.7 as a string typeof string

// or
const Convert_a_Number_to_a_String2 = (num) => {
  return `${num}`;
};
console.log(typeof Convert_a_Number_to_a_String(8.7)); //8.7 as a string typeof string

// or
const Convert_a_Number_to_a_String3 = (num) => {
  return num.toString();
};
console.log(typeof Convert_a_Number_to_a_String(10)); //10 as a string typeof string
