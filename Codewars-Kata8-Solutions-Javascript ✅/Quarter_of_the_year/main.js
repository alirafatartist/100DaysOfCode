const Quarter_of_the_year = (month) => {
  return Number.isInteger(month / 3) ? month / 3 : Math.ceil(month / 3);
};
console.log(Quarter_of_the_year(12)); // 4
console.log(Quarter_of_the_year(3)); // 1
console.log(Quarter_of_the_year(4)); // 2
console.log(Quarter_of_the_year(5)); // 2
console.log(Quarter_of_the_year(7)); // 3
console.log(Quarter_of_the_year(10)); // 4

console.log("#######################################");

// Way2
const Quarter_of_the_year2 = (month) => {
  return month < 4 ? 1 : month < 7 ? 2 : month < 10 ? 3 : 4;
};
console.log(Quarter_of_the_year2(12)); // 4
console.log(Quarter_of_the_year2(3)); // 1
console.log(Quarter_of_the_year2(4)); // 2
console.log(Quarter_of_the_year2(5)); // 2
console.log(Quarter_of_the_year2(7)); // 3
console.log(Quarter_of_the_year2(10)); // 4

console.log("#######################################");

// Way3
const Quarter_of_the_year3 = (month) => {
  return Math.ceil(month / 3);
};
console.log(Quarter_of_the_year3(12)); // 4
console.log(Quarter_of_the_year3(3)); // 1
console.log(Quarter_of_the_year3(4)); // 2
console.log(Quarter_of_the_year3(5)); // 2
console.log(Quarter_of_the_year3(7)); // 3
console.log(Quarter_of_the_year3(10)); // 4
