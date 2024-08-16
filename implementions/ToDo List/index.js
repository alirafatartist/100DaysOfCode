let home = document.querySelector(".home-screen");
let screen_backdrop = document.querySelector(".screen-backdrop");
let category = document.querySelectorAll(".category");
// setTimeout(() => {
//   home.classList.add("trans");
// }, 3000);
category.forEach((cat) => {
  cat.addEventListener("click", () => {
    home.classList.add("trans");
    screen_backdrop.classList.add("trans");
  });
});
