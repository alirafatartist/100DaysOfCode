const myArray = [];
function reversedArray(n) {
  let t = n.toString();
  for (let i = 0; i < t.length; i++) {
    myArray.push(Number(t[i]));
    // Number(myArray[i]);
  }
  myArray.reverse();
  console.log(myArray);
}
reversedArray(123456789);
// console.log(typeof myArray[2]);
