"use strict";

const Person = function (firstName, birthYear) {
  // console.log(firstName,birthYear); // Ali 2003
  // console.log(this); // Person{}
  this.firstName = firstName;
  this.birthYear = birthYear;
  // Never do this
  //   this.calcAge = function () {
  //     console.log(2024 - this.birthYear);
  //   };
};
const ali = new Person("Ali", 2003);
console.log(ali);

const matilda = new Person("Matilda", 1991);
console.log(matilda);

const jack = new Person("Jack", 2010);
console.log(jack);

console.log(jack instanceof Person);
console.log(" ");
Person.prototype.calcAge = function () {
  console.log(2024 - this.birthYear);
};
console.log(jack);
jack.calcAge();
function getproducts() {
  let xhr = new XMLHttpRequest();
  xhr.open("get", "https://reqres.in/api/products/", true);
  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      // console.log(xhr.responseText); // if data back is json
      // console.log(xhr.responseXML); // if data back is XML
      let products = xhr.responseText;
      let productsObj = JSON.parse(products);
      show(productsObj);
    }
  };
  xhr.send();
}

getproducts();
function show(productsObj) {
  console.log(productsObj.data[0].name); // cerulean
}

function test() {
  let xhr = new XMLHttpRequest();
  let filepath = "data.json";
  xhr.open("get", filepath, true);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log(xhr.responseText);
    }
  };
  xhr.send();
}
test();
// var xhr2 = new XMLHttpRequest()
// xhr2.open("post","https://jsonplaceholder.typicode.com/posts",true)

// xhr2.send(obj)
