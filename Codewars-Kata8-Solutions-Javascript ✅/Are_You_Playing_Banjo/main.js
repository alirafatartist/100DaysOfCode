// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

const Are_You_Playing_Banjo = (name) => {
  return name[0] === "R" || name[0] === "r"
    ? `${name} PLays Banjo`
    : `${name} Doesn't Play Banjo`;
};
console.log(Are_You_Playing_Banjo("Rami")); //Rami PLays Banjo
console.log(Are_You_Playing_Banjo("rami")); //rami PLays Banjo
console.log(Are_You_Playing_Banjo("Ali")); //Ali Doesn't Play Banjo
