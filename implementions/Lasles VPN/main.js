let dark_button = document.querySelector(".dark");
let container = document.querySelector(".container");
let menu = document.querySelector(".menu");
let links = document.querySelector(".links");

dark_button.addEventListener("click", () => {
  if (dark_button.textContent == " dark_mode ") {
    setTimeout(() => {
      dark_button.textContent = " light_mode ";
    }, 100);
    dark_button.classList.add("rotate");
  } else {
    setTimeout(() => {
      dark_button.textContent = " dark_mode ";
    }, 100);
    dark_button.classList.remove("rotate");
  }
  // container.classList.toggle("dark");
  document.body.classList.toggle("dark");
});

menu.addEventListener("click", () => {
  links.classList.toggle("transform-links");
});
