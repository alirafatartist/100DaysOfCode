const Remove_First_and_Last_Character = (str) => {
  return str.replace(`${str[0]}`, "").replace(`${str[str.length - 1]}`, "");
};

console.log(Remove_First_and_Last_Character("hello")); //ell

// Way2
const Remove_First_and_Last_Character2 = (str) => {
  return str.slice(1, -1);
};

console.log(Remove_First_and_Last_Character2("hello")); //ell
