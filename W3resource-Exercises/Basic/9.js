// 9. Write a JavaScript program to calculate the days left before Christmas.

let calc = (date) => {
  date = new Date();
  let next = new Date(`${date.getFullYear() + 1}-01-01`);
  let currentdays = Math.floor(date.getTime() / 1000 / 60 / 60 / 24);
  let nextdays = Math.floor(next.getTime() / 1000 / 60 / 60 / 24);
  console.log(nextdays - currentdays);
};
console.log(calc());