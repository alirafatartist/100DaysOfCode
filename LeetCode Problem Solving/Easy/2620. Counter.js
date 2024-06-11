var createCounter = function (n) {
  return () => n++;
};
const counter = createCounter(1);
console.log(counter()); //1
console.log(counter()); //2
console.log(counter()); //3
