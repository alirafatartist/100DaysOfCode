let right = document.querySelector(".right");
let left = document.querySelector(".left");
let lists = document.getElementsByClassName("list");

for (list of lists) {
  list.addEventListener("dragstart", function (e) {
    let slected = e.target;
    right.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    right.addEventListener("drop", function (e) {
      right.appendChild(slected);
      slected = null;
    });

    left.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    left.addEventListener("drop", function (e) {
      left.appendChild(slected);
      slected = null;
    });
  });
}
