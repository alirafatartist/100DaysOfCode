let text = document.getElementById("text");

document.addEventListener("keyup", function (e) {
  if (e.code === "Space") {
    text.innerText = "Space";
  } else {
    text.innerText = e.key;
  }
});
