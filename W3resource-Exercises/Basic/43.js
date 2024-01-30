// 43. Write a JavaScript program to check from three given numbers (non negative integers) that two or all of them have the same rightmost digit.  


// Like Problem #36

let check = (a, b, c) => {
    let str_a = a.toString(),
      str_b = b.toString(),
      str_c = c.toString();
    if (a < 0 || b < 0 || c < 0) {
      return "invalid Number";
    } else {
      return (
        str_a[str_a.length - 1] == str_b[str_b.length - 1] &&
        str_a[str_a.length - 1] == str_c[str_c.length - 1]
      );
    }
  };
  console.log(check(11, 111, 101)); // true
  console.log(check(20, 30, -400)); // invalid Number
  console.log(check(20, -30, 400)); // invalid Number
  console.log(check(-20, 30, 400)); // invalid Number
  console.log(check(20, 30, 400)); // true
  console.log(check(20, 30, 401)); // false
  
  // Way2
  
  let check2 = (a, b, c) => {
    if (a > 0 && b > 0 && c > 0) {
      return a % 10 === b % 10 && b % 10 === c % 10 && a % 10 === c % 10;
    } else {
      return "Invalid Number";
    }
  };
  console.log(check2(11, 111, 101)); // true
  console.log(check2(20, 30, -400)); // invalid Number
  console.log(check2(20, -30, 400)); // invalid Number
  console.log(check2(-20, 30, 400)); // invalid Number
  console.log(check2(20, 30, 400)); // true
  console.log(check2(20, 30, 401)); // false
  