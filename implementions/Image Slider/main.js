let currentIndex = 0;
const slides = document.querySelectorAll(".slider img");
const totalSlides = slides.length;

function showSlide(index) {
  if (index < 0) {
    currentIndex = totalSlides - 1;
  } else if (index >= totalSlides) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  const offset = -currentIndex * 100;
  document.querySelector(".slider").style.transform = `translateX(${offset}%)`;
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

let buttons = document.querySelectorAll("span");

buttons[1].addEventListener("click", () => {
  // clearInterval(interval)
  nextSlide();
});
buttons[0].addEventListener("click", () => {
  // clearInterval(interval)
  prevSlide();
});

// let interval = function auto(){
//     setInterval(() => {
//         nextSlide()
//     }, 5000);
// }
// interval();
