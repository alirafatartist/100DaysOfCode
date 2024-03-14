const group = document.querySelector(".group");

for (let i = 0; i < 20; i++) {
  const iconContainer = document.createElement("div");
  iconContainer.className = "iconContainer";
  iconContainer.id = "iconContainer";
  group.appendChild(iconContainer);
  for (let i = 0; i < 100; i++) {
    const iconI = document.createElement("i");
    iconI.className = "icon fas";
    iconI.innerHTML = gen();
    iconContainer.appendChild(iconI);
  }
}

// Create unicodes array and return random value
function gen() {
  const uni = [];
  for (let i = 1; i < 50; i++) {
    let unicode = `&#xf00${i}`;
    if (i >= 10) {
      unicode = `&#xf0${i}`;
    }
    uni.push(unicode);
  }
  const random = Math.floor(Math.random() * uni.length);
  return uni[random];
}
