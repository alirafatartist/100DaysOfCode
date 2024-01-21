var body = document.querySelector("body");
var card = document.querySelector("div.container");
var modebutton = document.getElementById("button");
var searchInput = document.querySelector("input");
var searchButton = document.querySelector('button');
var countryImage = document.querySelector('img');
var result = document.querySelector("#result");
var error = document.querySelector(".error");
modebutton.addEventListener("click", function () {
    modebutton.classList.toggle("light-mode");
    body.classList.toggle("light-mode");
    card.classList.toggle("light-mode");
});
searchButton.addEventListener("click", function (e) {
    var countryName = searchInput.value.toLocaleUpperCase();
    var url = "https://restcountries.com/v3.1/name/".concat(countryName, "?fullText=true");
    fetch(url).then(function (data) {
        if (data.status !== 404) {
            return data.json();
        }
        else {
            result.innerHTML = "Country not found";
            result.style.color = "#ff4362";
            throw new Error("Not Found");
        }
    }).then(function (item) {
        // console.log(item);
        // console.log(item[0].flags["png"]);
        // console.log(item[0].coatOfArms["png"]);
        // console.log(item[0].capital[0]);
        // console.log(item[0].continents[0]);
        // console.log(item[0].population);
        // console.log(item[0].currencies[Object.keys(item[0].currencies)].name);
        // console.log(Object.keys(item[0].currencies)[0]);
        // console.log(Object.values(item[0].languages));
        if (countryName == "ISRAEL") {
            result.innerHTML =
                "<div class=\"bottom\">\n                            <div class=\"country\">\n                                <div class=\"pic\">\n                                    <img src=\"https://emojiisland.com/cdn/shop/products/Poop_Emoji_7b204f05-eec6-4496-91b1-351acc03d2c7_grande.png?v=1571606036\" alt=\"\">\n                                </div>\n                                    <p id=\"country_name\">This is a fictional country</p>\n                            </div>\n                        </div>\n                    ";
        }
        else {
            result.innerHTML =
                "<div class=\"bottom\">\n                    <div class=\"country\">\n                        <div class=\"pic\">\n                            <img src=\"".concat(item[0].flags["png"], "\" alt=\"\">\n                            <img src=\"").concat(item[0].coatOfArms["png"], "\" alt=\"\">\n                        </div>\n                            <p id=\"country_name\">").concat(searchInput.value.toUpperCase(), "</p>\n                    </div>\n                        <div class=\"details\">\n                            <h5>Capital <span class=\"material-symbols-outlined\">\n                            things_to_do\n                            </span> : <span>").concat(item[0].capital[0], "</span></h5>\n                            <h5>Continent <span class=\"material-symbols-outlined\">\n                            globe_uk\n                            </span> : <span>").concat(item[0].continents[0], "</span></h5>\n                            <h5>Population <span class=\"material-symbols-outlined\">\n                            diversity_3\n                            </span> : <span>").concat(item[0].population, "</span></h5>\n                            <h5>Currency <span class=\"material-symbols-outlined\">\n                            payments\n                            </span> : <span>").concat(item[0].currencies[Object.keys(item[0].currencies)].name, " - ").concat(Object.keys(item[0].currencies)[0], "</span></h5>\n                            <h5>languages <span class=\"material-symbols-outlined\">\n                            translate\n                            </span> : <span>").concat(Object.values(item[0].languages).toString()
                    .split(",")
                    .join(", "), "</span></h5>\n                        </div>\n                </div>\n            ");
        }
    });
});
