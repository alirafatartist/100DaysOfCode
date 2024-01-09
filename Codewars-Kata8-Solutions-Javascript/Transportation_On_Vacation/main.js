const Transportation_On_Vacation = (d) => {
  let price = 40 * d;
  if (d < 3) {
    return price;
  } else if (d > 7) {
    return (price -= 50);
  } else {
    return (price -= 20);
  }
};
console.log(Transportation_On_Vacation(4));

// Switch Case
const Transportation_On_Vacation2 = (d) => {
  let price = 40 * d;
  switch (d) {
    case d < 3:
      return price;
      break;

    case d > 7:
      return (price -= 50);
      break;
    default:
      return (price -= 20);
      break;
  }
};
console.log(Transportation_On_Vacation2(8));
