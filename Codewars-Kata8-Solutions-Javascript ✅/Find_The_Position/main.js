const Find_The_Position = (alphbet) => {
  let SmallalphbetsArray = "abcdefghijklmnopqrstuvwxyz";
  return SmallalphbetsArray.indexOf(alphbet.toLowerCase()) + 1;
};

console.log(Find_The_Position("Q")); //17

