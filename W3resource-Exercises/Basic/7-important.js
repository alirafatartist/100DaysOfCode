// 7. Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050.

let check = (Startyear, Endyear) => {
  for (let i = Startyear; i <= Endyear; i++) {
    let date = new Date(`${i}-01-01`);

    if (date.getDay() === 0) {
      console.log(`1st January is being a Sunday ${i}`);
    }
  }
};
console.log(check(2024, 2050));

// 1st January is being a Sunday 2034
// 1st January is being a Sunday 2040
// 1st January is being a Sunday 2045
