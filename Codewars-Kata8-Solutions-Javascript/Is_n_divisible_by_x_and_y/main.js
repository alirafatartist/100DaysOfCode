const Is_n_divisible_by_x_and_y = (n, x, y) => {
  return n % x == 0 && n % y == 0 ? "divisible" : "not divisible";
};
console.log(Is_n_divisible_by_x_and_y(10, 6, 2)); //not divisible
console.log(Is_n_divisible_by_x_and_y(30, 6, 2)); //divisible
