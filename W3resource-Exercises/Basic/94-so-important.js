// 94. Write a JavaScript program to find the number appearing most frequently in a given array of integers.

let array_element_mode = (arr) => {
  let maxCount = 0;
  let modeElement = null;
  for (let j = 0; j < arr.length; j++) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == arr[j]) {
        count++;
      }
    }

    if (count > maxCount) {
      maxCount = count;
      modeElement = arr[j];
    }
  }
  return modeElement;
};

// Way2

const ar = [1, 2, 1, 8, 8, 8, 8, 2, 1];
const counter = {};
let max = 0,
  answer;
for (const value of ar) {
  if (counter.hasOwnProperty(value)) {
    counter[value]++;
  } else {
    counter[value] = 1;
  }

  if (counter[value] > max) {
    max = counter[value];
    answer = value;
  }
}
console.log({ counter, answer });

// Way3

/*
max=4
answer=8
count=3
[1,1,1,2,2,8,8,8,8]
 ^ ^
*/

let ar = [1, 2, 4, 1, 8, 2, 4, 2];
let max = 0,
  answer,
  count = 0,
  arrow1 = 0,
  arrow2 = 1;
ar.sort();
while (arrow1 < ar.length) {
  if (ar[arrow1] == ar[arrow2]) {
    count++;
    arrow1++;
    arrow2++;
  } else {
    count++;
    if (count > max) {
      max = count;
      answer = ar[arrow1];
    }
    count = 0;
    arrow1++;
    arrow2++;
  }
}
console.log({ max, answer });
