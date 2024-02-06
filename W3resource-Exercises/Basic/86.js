// 86. Write a JavaScript program to find the types of a given angle.
//         Types of angles:
//         Acute angle: An angle between 0 and 90 degrees.
//         Right angle: An 90 degree angle.
//         Obtuse angle: An angle between 90 and 180 degrees.
//         Straight angle: A 180 degree angle.

let angle_Type = (s) => {
  if (s > 0 && s < 90) {
    return "Acute angle";
  } else if (s === 90) {
    return "Right angle";
  } else if (s > 90 && s < 180) {
    return "Obtuse angle";
  } else if (s === 180) {
    return "Straight angle";
  } else {
    return "Invalid angle";
  }
};

console.log(angle_Type(47)); // Acute angle.
console.log(angle_Type(90)); // Right angle.
console.log(angle_Type(145)); // Obtuse angle.
console.log(angle_Type(180)); // Straight angle.

// Way2

let angle_Type2 = (s) => {
  return s > 0 && s < 90
    ? "Acute angle"
    : s == 90
    ? "Right angle"
    : s > 90 && s < 180
    ? "Obtuse angle"
    : s == 180
    ? "Straight angle"
    : "Invalid angle";
};

console.log(angle_Type2(47)); // Acute angle.
console.log(angle_Type2(90)); // Right angle.
console.log(angle_Type2(145)); // Obtuse angle.
console.log(angle_Type2(180)); // Straight angle.
