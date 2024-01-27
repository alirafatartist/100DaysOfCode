// 4. Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7
const calc = (side1, side2, side3) => {
  let halfPerimeter = (side1 + side2 + side3) / 2;

  let area = Math.sqrt(
    halfPerimeter *
      (halfPerimeter - side1) *
      (halfPerimeter - side2) *
      (halfPerimeter - side3)
  );

  return `The Area of triangle : ${area}`;
};

console.log(calc(3, 4, 5)); //6
console.log(calc(6, 6, 6)); //15.58
