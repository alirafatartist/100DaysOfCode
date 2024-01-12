const grow = (arr) => {
  let result = 1;
  for (let i = 0; i < arr.length; i++) {
    result *= arr[i];
  }
  return result;
};
console.log(grow([1, 2, 3, 4])); //24

// Way2
const grow2 = (arr) => {
  return arr.reduce((acc, current, index, array) => acc * current);
};
console.log(grow2([1, 2, 3, 4])); //24

// for explain reduce
console.log("###########################");
let arr = [1, 2, 3, 4];
let gr = arr.reduce(function (acc, current, index, array) {
  console.log(acc); // it's first value of array
  console.log(current); // it's second value of array
  console.log(index); // it's the index of current
  console.log(array); //the array [1,2,3,4]
  return acc * current; //24
});
console.log(gr);
