let drButton = document.querySelector(".settings");
let drButtonsp = document.querySelector(".settings span");
let input = document.querySelector(".input");
let result = document.querySelector(".result");
let backspace = document.querySelector(".backspace");
let Ac = document.querySelector(".ac");

// Dark_Mode
drButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    setTimeout(() => {
      drButtonsp.textContent = " light_mode ";
    }, 170);
    drButtonsp.classList.add("spin");
  } else {
    setTimeout(() => {
      drButtonsp.textContent = " dark_mode ";
    }, 170);
    drButtonsp.classList.remove("spin");
  }
});

// Add to display
function appindtodisplay(i) {
  input.value += i;
}

// Clear_Input
Ac.addEventListener("click", () => {
  input.value = "";
  result.value = "0";
});

// backspace
backspace.addEventListener("click", () => {
  input.value = input.value.substring(0, input.value.length - 1);
});

// equal
function equal() {
  let edit = input.value.replaceAll("×", "*").replaceAll("÷", "/");
  try {
    result.value = eval(edit);
    if (result.value == "undefined") {
      result.value = "0";
    }
  } catch (error) {
    input.value = "";
    result.value = "Error";
  }
}
