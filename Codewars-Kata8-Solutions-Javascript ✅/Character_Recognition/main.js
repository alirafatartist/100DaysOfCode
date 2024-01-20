const Character_Recognition = (str) => {
  return str
    .replaceAll(0, "O")
    .replaceAll(1, "I")
    .replaceAll(5, "S")
    .toUpperCase();
};
console.log(Character_Recognition("L0nd0n")); // LONDON
console.log(Character_Recognition("dubl1n")); // DUBLIN
