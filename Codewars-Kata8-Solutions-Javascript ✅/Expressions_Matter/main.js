const Expressions_Matter = (a, b, c) => {
  return Math.max(a + b + c, a * b * c, a * (b + c), c * (a + b));
};
console.log(Expressions_Matter(3, 5, 7)); //105
