const Summation = (num) => {
  let result = 0;
  for (let i = 1; i <= num; i++) {
    result += i;
  }
  return result;
};
console.log(Summation(8)); //36 => 1+2+3+4+5+6+7+8

// Way2
const Summation2 = (num) => {
  return Array(num)
    .fill(true)
    .reduce((acc, current, index) => acc + current + index);
};
console.log(Summation2(10)); //55 => 1+2+3+4+5+6+7+8+9+10
