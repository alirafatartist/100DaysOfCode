let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let password2 = document.getElementById("password2");
let button = document.getElementById("submit");
let errors = document.getElementsByTagName("small");
let form = document.getElementById("form");

// function focusUsername() {
//   username.addEventListener("keypress", (e) => {
//     let small = username.nextElementSibling;
//     console.log(e.code);
//     if (e.code == "Space") {
//       e.preventDefault();
//       small.classList.add("error");
//       username.classList.add("error");
//       small.innerHTML = "Please don't write spaces";
//     }
//   });
// }
function blurUsername() {
  let small = username.nextElementSibling;
  let result;
  if (username.value.length == 0) {
    username.classList.remove("error");
    username.classList.remove("success");
  } else if (username.value.includes(" ")) {
    small.classList.add("error");
    username.classList.add("error");
    result = false;
  } else {
    small.classList.remove("error");
    username.classList.remove("error");
    username.classList.add("success");
    result = true;
  }
  return result;
}
function blurEmail() {
  let small = email.nextElementSibling;
  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  let result;
  if (email.value.length == 0) {
    email.classList.remove("error");
    email.classList.remove("success");
  } else if (!email.value.match(pattern)) {
    small.classList.add("error");
    email.classList.add("error");
    result = false;
  } else {
    small.classList.remove("error");
    email.classList.remove("error");
    email.classList.add("success");
    result = true;
  }
  return result;
}
function blurPassword() {
  let small = password.nextElementSibling;
  let result;
  if (password.value.length == 0) {
    password.classList.remove("error");
    password.classList.remove("success");
  } else if (password.value.length < 6) {
    small.classList.add("error");
    password.classList.add("error");
    result = false;
  } else {
    small.classList.remove("error");
    password.classList.remove("error");
    password.classList.add("success");
    result = true;
  }
  return result;
}
function blurPassword2() {
  let small = password2.nextElementSibling;
  let result;
  if (password2.value.length == 0) {
    password2.classList.remove("error");
    password2.classList.remove("success");
  } else if (password2.value !== password.value) {
    small.classList.add("error");
    password2.classList.add("error");
    result = false;
  } else {
    small.classList.remove("error");
    password2.classList.remove("error");
    password2.classList.add("success");
    result = true;
  }
  return result;
}

function sendData(e) {
  // event.preventDefault();
  blurUsername();
  blurEmail();
  blurPassword();
  blurPassword2();

  if (
    blurUsername() == false ||
    blurEmail() == false ||
    blurPassword() == false ||
    blurPassword2() == false
  ) {
    e.preventDefault();
  } else {
    e.preventDefault();
    addUser();
    form.reset();
  }
}

let users = [];
function addUser() {
  let obj = {
    username: username.value,
    email: email.value,
    password: password.value,
  };
  users.push(obj);
  console.log(users);
}
