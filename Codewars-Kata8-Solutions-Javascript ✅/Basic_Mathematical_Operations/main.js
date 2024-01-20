const Basic_Mathematical_Operations = (o, a, b) => {
  if (o == "+") {
    return a + b;
  } else if (o == "*") {
    return a * b;
  } else if (o == "-") {
    return a - b;
  } else if (o == "/") {
    return a / b;
  }
};
console.log(Basic_Mathematical_Operations("*", 5, 8)); //40

// Short Amazing code
const Basic_Mathematical_Operations2 = (o, a, b) => {
  return eval(a + o + b);
};
console.log(Basic_Mathematical_Operations2("/", 40, 8)); //5
