let theImages = [
  {
    src: "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
    width: "240",
    height: "160",
  },
  {
    src: "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg",
    width: "320",
    height: "195",
  },
  {
    src: "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg",
    width: "500",
    height: "343",
  },
];

function display_random_image() {
  let div = document.querySelector("div.img");
  let ransomNum = Math.floor(Math.random() * theImages.length);
  console.log(ransomNum);
  div.innerHTML = `
  <img src="${theImages[ransomNum].src}" width="${theImages[ransomNum].width}" height="${theImages[ransomNum].height}" alt="">
  `;
}
