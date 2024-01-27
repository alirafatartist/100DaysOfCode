// Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

let date = new Date();
let daylist = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
console.log(`Today is :  ${daylist[date.getDay()]}`);

let hours = date.getHours();
let prepand = "";
let minutes = date.getMinutes();
let seconds = date.getSeconds();
prepand = hours >= 12 ? "PM" : "AM";
console.log(`${hours} ${prepand} : ${minutes} : ${seconds}`);

let x = date.toLocaleDateString("en-US", {
  hour12: true,
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
});
console.log(`Current time s : ${x}`);
