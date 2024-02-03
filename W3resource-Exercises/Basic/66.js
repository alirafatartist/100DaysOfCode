// 66. Write a JavaScript program to display the city name if the string begins with "Los" or "New" otherwise return blank.

let display = (city) => {
  return city.split(" ")[0] == "Los" || city.split(" ")[0] == "New" ? city : "";
};
console.log(display("New York")); //New York
console.log(display("Los Angeles"));
console.log(display("London"));
