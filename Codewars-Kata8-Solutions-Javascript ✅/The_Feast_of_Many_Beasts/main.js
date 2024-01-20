const The_Feast_of_Many_Beasts = (beast, dish) => {
  return beast[0] == dish[0] && beast[beast.length - 1] == dish[dish.length - 1]
    ? true
    : false;
};
console.log(The_Feast_of_Many_Beasts("chickkadee", "chocolate cake")); //true
console.log(The_Feast_of_Many_Beasts("brown bear", "bear claw")); //false
