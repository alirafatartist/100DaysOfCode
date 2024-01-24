let inputs = document.querySelectorAll("input");
let button = document.querySelector("#submit");

button.addEventListener("click", () => {
  let rad = inputs[0].value;
  eq = (4 / 3) * Math.PI * Math.pow(rad, 3);
  inputs[1].value = eq;
  console.log(eq);
});
