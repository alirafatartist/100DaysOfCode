// 6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.

// A year is a leap year if the following conditions are satisfied:

// 1- The year is a multiple of 400.
// 2- The year is a multiple of 4 and not a multiple of 100.

function checkLeapyear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(checkLeapyear(2016)); // Leap Year
console.log(checkLeapyear(2000)); // Leap Year
console.log(checkLeapyear(1700)); //Not Leap Year
console.log(checkLeapyear(1800)); //Not Leap Year
console.log(checkLeapyear(100)); //Not Leap Year
