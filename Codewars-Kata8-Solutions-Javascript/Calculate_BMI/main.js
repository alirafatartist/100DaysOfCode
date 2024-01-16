const Calculate_BMI = (weight, height) => {
  return weight / height ** 2 <= 18.5
    ? "Underweight"
    : weight / height ** 2 <= 25
    ? "Normal"
    : weight / height ** 2 <= 30
    ? "Overweight"
    : "Obese";
};
console.log(Calculate_BMI(70, 176)); // Underweight
console.log(Calculate_BMI(80, 1.8)); // Normal
