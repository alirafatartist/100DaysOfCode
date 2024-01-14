const AddLength = (str) => {
  return str.split(" ").map((x) => `${x} ${x.length}`); // ['Apple5', 'boy3']
};
console.log(AddLength("Apple boy"));

// Way2
const AddLength2 = (str) => {
  const words = str.split(" ");
  const result = [];

  words.forEach(word => {
    result.push(`${word} ${word.length}`)
  });

  return result;
};

console.log(AddLength2("Apple ban")); // ['Apple 5', 'ban 3']
