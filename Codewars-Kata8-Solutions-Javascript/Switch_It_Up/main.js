const Switch_It_Up = (number) => {
  switch (number) {
    case 1:
      return "One";

      break;
    case 2:
      return "two";

      break;
    case 3:
      return "three";

      break;
    case 4:
      return "four";

      break;
    case 5:
      return "five";

      break;
    case 6:
      return "six";

      break;
    case 7:
      return "seven";

      break;
    case 8:
      return "eight";

      break;
      break;
    case 9:
      return "nine";

      break;

    default:
      return `Sorry ${number} not exist`;
      break;
  }
};

console.log(Switch_It_Up(3)); //three
console.log(Switch_It_Up(11)); //sorry 11 not exist
