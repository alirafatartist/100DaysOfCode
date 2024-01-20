// Create a method that takes as input a name, city, and state to welcome a person.
// and the length of the name array in test cases will vary.
// Note that name will be an array consisting of one or more values that should be joined together with one space between each,

const sayHello = (name, city, state) => {
  return `Hello, ${name.join(" ")}! Welcome to ${city}, ${state}!`;
};
console.log(sayHello(["John", "Smith"], "Phoenix", "Arizona"));
