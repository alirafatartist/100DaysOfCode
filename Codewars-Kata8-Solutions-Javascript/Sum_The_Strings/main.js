const Sum_The_Strings = (a, b) => {
  return `${+a + +b}`;
};
console.log(Sum_The_Strings("-5", "3")); // -2 as string
console.log(Sum_The_Strings("4", "5")); // 9 as string
console.log(Sum_The_Strings("", "")); // 0 as string
