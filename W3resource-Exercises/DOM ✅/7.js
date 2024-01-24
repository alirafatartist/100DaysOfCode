function createTable() {
  let rows = prompt("Enter the number of rows:");
  let columns = prompt("Enter the number of columns:");

  // Get the table element
  let table = document.getElementById("myTable");

  // Clear existing content
  table.innerHTML = "";

  for(let i=0; i<rows;i++){
   let row = table.insertRow(i)
   for(let j=0;j<columns;j++){
    let cell =row.insertCell(j)
   cell.innerHTML=`row ${i} column${j}`
   }
  }
}
