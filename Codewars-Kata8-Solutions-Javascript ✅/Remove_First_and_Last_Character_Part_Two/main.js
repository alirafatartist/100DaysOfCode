const Remove_First_and_Last_Character_Part_Two = (str) => {
  let a1 = str.split(",");
  a1.pop();
  a1.shift();
  return a1.length == 0 ? null : a1;
};
console.log(Remove_First_and_Last_Character_Part_Two("1,2,3,4")); // ['2', '3']
console.log(Remove_First_and_Last_Character_Part_Two("")); // null
console.log(Remove_First_and_Last_Character_Part_Two("1,2")); // null
