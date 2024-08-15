let options = ["rock", "paper", "scissors"];
let Result = document.querySelector(".top");
let lResult = Result.querySelectorAll("p")[0];
let rResult = Result.querySelectorAll("p")[1];
let middle = document.querySelector(".middle p");
let buttons = document.querySelectorAll(".options div");
console.log(buttons);

function convertTosymbol(choice) {
  if (choice == "rock") {
    return "✊";
  } else if (choice == "paper") {
    return "🤚";
  } else {
    return "✌️";
  }
}

function cpuChoice() {
  return options[Math.floor(Math.random() * options.length)];
}

function determineWinner(user, cpu) {
  if (user === cpu) {
    return "It's a tie 🎭";
  } else if (
    (user === "rock" && cpu === "scissors") ||
    (user === "paper" && cpu === "rock") ||
    (user === "scissors" && cpu === "paper")
  ) {
    return "You win 🎉";
  } else {
    return "You lose 😥";
  }
}

function userSelection(choice) {
  rResult.classList.add("rshake");
  lResult.classList.add("lshake");

  setTimeout(() => {
    rResult.classList.remove("rshake");
    lResult.classList.remove("lshake");
    let cpu = cpuChoice();
    let user = choice;
    rResult.innerHTML = convertTosymbol(cpu);
    lResult.innerHTML = convertTosymbol(user);
    middle.innerHTML = determineWinner(user, cpu);
  }, 2000);
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => (btn.style.opacity = "0.5"));
    button.style.opacity = "1";
  });
});
