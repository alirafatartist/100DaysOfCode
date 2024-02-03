let reactions = document.querySelector(".reactions");
let like = document.querySelector(".like");
let love = document.querySelector(".love");
let wow = document.querySelector(".wow");
let sad = document.querySelector(".sad");
let angry = document.querySelector(".angry");
let haha = document.querySelector(".haha");
// let buttons = reactions.children
// console.log(reactions.children[0]);

reactions.children[0].addEventListener("click", () => {
  like.style.transform = "translateY(-403px)";
  like.style.transition = "all 2s";
  setTimeout(() => {
    like.style.transition = "none";
    like.style.transform = "translateY(403px)";
  }, 700);
});
reactions.children[1].addEventListener("click", () => {
  love.style.transform = "translateY(-403px)";
  love.style.transition = "all 2s";
  setTimeout(() => {
    love.style.transition = "none";
    love.style.transform = "translateY(403px)";
  }, 700);
});
reactions.children[2].addEventListener("click", () => {
  haha.style.transform = "translateY(-403px)";
  haha.style.transition = "all 2s";
  setTimeout(() => {
    haha.style.transition = "none";
    haha.style.transform = "translateY(403px)";
  }, 700);
});
reactions.children[3].addEventListener("click", () => {
  wow.style.transform = "translateY(-403px)";
  wow.style.transition = "all 2s";
  setTimeout(() => {
    wow.style.transition = "none";
    wow.style.transform = "translateY(403px)";
  }, 700);
});
reactions.children[4].addEventListener("click", () => {
  sad.style.transform = "translateY(-403px)";
  sad.style.transition = "all 2s";
  setTimeout(() => {
    sad.style.transition = "none";
    sad.style.transform = "translateY(403px)";
  }, 700);
});
reactions.children[5].addEventListener("click", () => {
  angry.style.transform = "translateY(-403px)";
  angry.style.transition = "all 2s";
  setTimeout(() => {
    angry.style.transition = "none";
    angry.style.transform = "translateY(403px)";
  }, 700);
});
