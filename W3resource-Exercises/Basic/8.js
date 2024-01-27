// 8. Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".

let game = () => {
  let cpu = Math.ceil(Math.random() * 10);
  let user = prompt("Guess The Number: ");
  return cpu == user ? "Good Work" : `Not matched the number was ${cpu}`;
};
console.log(game());
