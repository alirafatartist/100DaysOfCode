// Code wars Kata8 Solutions

// Twice as old

// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).
//  The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.

const Twice_as_old = (dadyearsold, sonyearsold) => {
  return Math.abs(dadyearsold - sonyearsold - sonyearsold);
};
console.log(Twice_as_old(36, 7)); //22
console.log(Twice_as_old(55, 30)); // 5
