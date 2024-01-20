const small2Capital = () => {
  let SmallalphbetsArray = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let CapitalalphbetsArray = [
    ...SmallalphbetsArray.map((x) => x.toUpperCase()),
  ];
  console.log(CapitalalphbetsArray);
};

small2Capital(); // it should retturn this array with capital alphabet
