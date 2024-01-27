// 3. Write a JavaScript program to get the current date.
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

let date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

day < 10 ? (day = "0" + day) : day;
month < 10 ? (month = "0" + month) : month;

console.log(`${day}-${month}-${year}`);
console.log(`${day}/${month}/${year}`);
