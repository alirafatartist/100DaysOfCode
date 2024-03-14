const logo = document.querySelector(".logo");
const menu = document.querySelector(".fa-bars");
const links = document.querySelector("nav ul");

function changeimgsrc() {
  if (window.innerWidth <= 768) {
    logo.setAttribute("src", "./assets/logo-white.png");
  } else {
    logo.setAttribute("src", "./assets/logo-dark.png");
  }
}
changeimgsrc();

window.addEventListener("resize", () => {
  changeimgsrc();
});

// toggle menubar
menu.addEventListener("click", () => {
  menu.classList.toggle("fa-xmark");
  menu.classList.toggle("rotate");
  links.classList.toggle("show");
});
