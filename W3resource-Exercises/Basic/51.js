// 51. Write a JavaScript program to convert a given number into hours and minutes.

function convert(n) {
  let hourse = Math.floor(n / 60);
  let minutes = n % 60;
  return `${hourse}:${minutes} `;
}
console.log(convert(71)); //1:11
console.log(convert(450)); //7:30
console.log(convert(1441)); //24:1
