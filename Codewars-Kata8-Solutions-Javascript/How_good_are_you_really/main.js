const How_good_are_you_really = (classPoints, yourPoints) => {
  return yourPoints >
    classPoints.reduce((acc, current) => acc + current) / classPoints.length
    ? true
    : false;
};
console.log(How_good_are_you_really([100, 40, 34, 57, 29, 72, 57, 88], 75)); // true
