// 14. Write a JavaScript exercise to get the filename extension.

let ex = (filename) => {
  return filename.split(".")[1];
};
console.log(ex("index.html")); //html
console.log(ex("main.js")); //js
console.log(ex("index.php")); //php



// Way2

let ex2 = (filename) => {
    return filename.split(".").pop();
  };
  console.log(ex2("index.html")); //html
  console.log(ex2("main.js")); //js
  console.log(ex2("index.php")); //php