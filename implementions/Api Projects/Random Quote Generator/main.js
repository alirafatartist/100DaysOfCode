let body = document.querySelector("body");
let card = document.querySelector("div.container");
let modebutton = document.getElementById("button");
let result = document.querySelector(".result");
let copy = document.querySelector(".copy");
let copyText = document.querySelector(".copy p");
let geIcon = document.querySelector(".gen button span");
let gen = document.querySelector(".gen");
let button = document.querySelector(".gen");

modebutton.addEventListener("click", () => {
  modebutton.classList.toggle("light-mode");
  body.classList.toggle("light-mode");
  card.classList.toggle("light-mode");
});

button.addEventListener("click", () => {
  let url = `https://api.quotable.io/random`;
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      let qoute = item.content;
      let tag = item.tags[0];
      let author = item.author;
      console.log(item);
      console.log(qoute);
      console.log(tag);
      console.log(author);
      // console.log(qoutText);
      geIcon.classList.toggle("rotate");
      result.innerHTML = `
    <div class="qout w-[22rem]">
    <i class="fa-solid fa-quote-left text-4xl"></i>
    <p class="qoute my-2">${qoute}</p>
    <i
    class="fa-solid fa-quote-right text-4xl text-right float-right"
    ></i>
    </div>
    <div class="info mt-5 pb-7 border-b-2 border-green-500 flex justify-between items-center">
    <div class="tags">
    <p class="text-[#999] text-sm">Tags</p>
    <div class="tag bg-indigo-600 w-fit p-1 rounded-md text-xs mt-1">${tag}</div>
    </div>
    <div class="auther">
    - ${author} -
    </div>
    </div>
    `;

      let qoutText = document.querySelector(".qoute").textContent;
      copy.addEventListener("click", () => {
        navigator.clipboard.writeText(qoutText);
        copyText.style.display = "block";
        setTimeout(() => {
          copyText.style.display = "none";
        }, 3000);
      });
    });
});
