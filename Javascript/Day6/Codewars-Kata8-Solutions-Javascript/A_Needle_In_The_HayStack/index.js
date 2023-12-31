function Find_Needle(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "Needle") {
      return console.log(
        `found the needle at position ${i + 1} and index ${i}`
      );
    }
  }
}
Find_Needle([
  "Frank",
  "Alice",
  "Diana",
  "Harry",
  "Irene",
  "Eve",
  "Needle",
  "Charlie",
  "Jack",
  "Grace",
]);
