let inputs = document.querySelectorAll("input");
let form = document.querySelector("#form1");

function getFormvalue() {
  inputs.forEach((element) => {
    element.value !== "Submit" ? console.log(element.value) : "";
  });
}

// Way2
function getFormvalue() {
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value != "Submit") {
      console.log(inputs[i].value);
    }
  }
}
// way3
function getFormvalue() {
  var x = document.getElementById("form1");
  for (var i = 0; i < x.length; i++) {
    if (x.elements[i].value != "Submit") {
      console.log(x.elements[i].value);
    }
  }
}
