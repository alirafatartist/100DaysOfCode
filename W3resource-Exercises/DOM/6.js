let table = document.querySelector("table");

function changeContent() {
  let coulmnNum = prompt("type coulumn number(0,1)");
  let rowNum = prompt("type row number(0,1,2)");
  let td = document.querySelector("td");
  let cellcont = prompt("type Cell content");
  table.children[0].children[rowNum].children[coulmnNum].innerHTML = cellcont;
}
