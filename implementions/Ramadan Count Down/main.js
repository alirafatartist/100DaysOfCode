let date = new Date();
let dateday = document.querySelector(".dateday");
let span = document.querySelector("span");
let main = document.querySelector(".main");

let todayhijri = date.toLocaleDateString("ar-SA", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
});

dateday.innerHTML = todayhijri;

let secondsday = new Date(`${date}`);
let rday = new Date(`Mar 11, 2024`);

console.log(
  rday.toLocaleDateString("ar-SA", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })
);
let ramadandateintime = rday.getTime();
let dattime = secondsday.getTime();

let diff = ramadandateintime - dattime;

let ramadan_s = diff / 1000;
let ramadan_m = ramadan_s / 60;
let ramadan_h = ramadan_m / 60;
let ramadan_d = ramadan_h / 24;
let ramadan_y = ramadan_d / 365;
span.innerHTML = Math.ceil(ramadan_d);

// setInterval(() => {
//     for(let i=1; i<=3; i++){
//         setTimeout(() => {
//             main.style.backgroundImage=`url(./src/images/${i}.jpg)`
//         }, 3000);
//     }
// }, 4000);

const images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
];

function getRandomImage() {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}
function changeBackgroundImage() {
  const imageUrl = `url(./src/images/${getRandomImage()})`;

  // Fade out the current image
  main.style.opacity = 0;

  setTimeout(() => {
    // Set the new image
    main.style.backgroundImage = imageUrl;

    // Fade in the new image
    main.style.opacity = 1;
  }, 500); // Delay the change for 1 second to match the fade-out transition
}

// Initial call to set the first image
changeBackgroundImage();

// Set an interval to change the background image every 3 seconds
setInterval(changeBackgroundImage, 5000);
