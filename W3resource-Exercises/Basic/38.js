// 38. Write a JavaScript program to check a student's total marks in various examinations. The student will get A+ grade if the total marks are in the range 89..100 inclusive, if the examination is "Final-exam" the student will receive A+ grade and total marks must be greater than or equal to 90. If the student gets an A+ grade, return true, otherwise return false.

let check = (tm, status) => {
  if ((status = "Final_Exam")) {
    return tm > 89 && tm < 100;
  }
};

console.log(check(78, "status")); // false
console.log(check(89, "status")); // false
console.log(check(99, "status")); // true
