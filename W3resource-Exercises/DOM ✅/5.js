let table = document.querySelector("table");
let tr = document.querySelectorAll("tr");
let text = "Row New";

function insert_Row() {
  let newR = table.insertRow(0);
  let newc1 = newR.insertCell(0);
  let newc2 = newR.insertCell(1);

  newc1.innerHTML = text;
  newc2.innerHTML = text;
}
