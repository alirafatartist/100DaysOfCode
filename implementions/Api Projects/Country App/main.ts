let body = document.querySelector("body") as HTMLBodyElement;
let card = document.querySelector("div.container") as HTMLDivElement;
let modebutton=document.getElementById("button") as HTMLButtonElement;
let searchInput =document.querySelector("input")as HTMLInputElement;
let searchButton=document.querySelector('button') as HTMLButtonElement;
let countryImage=document.querySelector('img') as HTMLImageElement;
let result=document.querySelector("#result") as HTMLDivElement;
let error=document.querySelector(".error") as HTMLDivElement;

modebutton.addEventListener("click",()=>{
    modebutton.classList.toggle("light-mode");
    body.classList.toggle("light-mode");
    card.classList.toggle("light-mode");
})
searchButton.addEventListener("click",(e)=>{
    let countryName:string=searchInput.value.toLocaleUpperCase();
    const url:string=`https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
        fetch(url).then((data)=>{
            if (data.status !== 404) {
                return data.json();
            } else {
                result.innerHTML = "Country not found";
                result.style.color="#ff4362" 
                throw new Error("Not Found"); 
            }
            
        }).then((item)=>{
            // console.log(item);
            // console.log(item[0].flags["png"]);
            // console.log(item[0].coatOfArms["png"]);
            // console.log(item[0].capital[0]);
            // console.log(item[0].continents[0]);
            // console.log(item[0].population);
            // console.log(item[0].currencies[Object.keys(item[0].currencies)].name);
            // console.log(Object.keys(item[0].currencies)[0]);
            // console.log(Object.values(item[0].languages));
            if(countryName== "ISRAEL"){
                result.innerHTML=
                        `<div class="bottom">
                            <div class="country">
                                <div class="pic">
                                    <img src="https://emojiisland.com/cdn/shop/products/Poop_Emoji_7b204f05-eec6-4496-91b1-351acc03d2c7_grande.png?v=1571606036" alt="">
                                </div>
                                    <p id="country_name">This is a fictional country</p>
                            </div>
                        </div>
                    `;
            }else{
                result.innerHTML=
                `<div class="bottom">
                    <div class="country">
                        <div class="pic">
                            <img src="${item[0].flags["png"]}" alt="">
                            <img src="${item[0].coatOfArms["png"]}" alt="">
                        </div>
                            <p id="country_name">${searchInput.value.toUpperCase()}</p>
                    </div>
                        <div class="details">
                            <h5>Capital <span class="material-symbols-outlined">
                            things_to_do
                            </span> : <span>${item[0].capital[0]}</span></h5>
                            <h5>Continent <span class="material-symbols-outlined">
                            globe_uk
                            </span> : <span>${item[0].continents[0]}</span></h5>
                            <h5>Population <span class="material-symbols-outlined">
                            diversity_3
                            </span> : <span>${item[0].population}</span></h5>
                            <h5>Currency <span class="material-symbols-outlined">
                            payments
                            </span> : <span>${item[0].currencies[Object.keys(item[0].currencies)].name} - ${Object.keys(item[0].currencies)[0]}</span></h5>
                            <h5>languages <span class="material-symbols-outlined">
                            translate
                            </span> : <span>${Object.values(item[0].languages).toString()
                                .split(",")
                                .join(", ")}</span></h5>
                        </div>
                </div>
            `}
        })



