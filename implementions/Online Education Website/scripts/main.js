const header = document.querySelector("header");
const bar = document.querySelector(".fa-bars");
const nav = document.querySelector("header nav");

// Show Navigation
bar.addEventListener("click", (e) => {
  bar.classList.toggle("fa-xmark");
  bar.classList.toggle("rotating");
  nav.classList.toggle("show");
});

// scroll
window.addEventListener("scroll", (e) => {
  if (window.scrollY > 30) {
    header.classList.add("full");
  } else {
    header.classList.remove("full");
  }
});
