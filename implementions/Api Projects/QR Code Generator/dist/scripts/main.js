let colorinput = document.querySelectorAll("input[type=color]")[0];
let backgroundinput = document.querySelectorAll("input[type=color]")[1];
let input = document.querySelector("input[type=text]");
let img = document.querySelector("img");
let button = document.querySelector("button");
let a = document.querySelector("button a");

// type function
const typeing = (color, background) => {
  if (input.value.length == 0) {
    img.setAttribute(
      "src",
      `https://quickchart.io/qr?text=Type%20url%20or%20enter%20text%20to%20create%20QR%20code&dark=${color}&light=${background}`
    );
  } else {
    img.setAttribute(
      "src",
      `https://quickchart.io/qr?text=${input.value}&dark=${color}&light=${background}`
    );
  }
};

const updatecolors = () => {
  const qrColor = colorinput.value.slice(1).toString();
  const bgColor = backgroundinput.value.slice(1).toString();
  typeing(qrColor, bgColor);
};

input.addEventListener("keyup", updatecolors);
colorinput.addEventListener("input", updatecolors);
backgroundinput.addEventListener("input", updatecolors);

// Download image
button.addEventListener("click", () => {
  fetch(img.src)
    .then((response) => response.blob())
    .then((blob) => {
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "QRCOde.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
});
