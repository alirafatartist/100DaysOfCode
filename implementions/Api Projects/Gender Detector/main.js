let body = document.querySelector("body");
let card = document.querySelector("div.container");
let modebutton = document.getElementById("button");
let searchInput = document.querySelector("input");
let searchButton = document.querySelector('button');
let result = document.querySelector("#result");

modebutton.addEventListener("click",  ()=> {
    modebutton.classList.toggle("light-mode");
    body.classList.toggle("light-mode");
    card.classList.toggle("light-mode");
});

searchButton.addEventListener("click",()=>{
    let url = `https://api.genderize.io?name=${searchInput.value}`
    
    fetch(url).then((data)=>data.json()).then((item)=>{
        
        console.log(item);
        const probability=()=>{
            return (item.probability/1)*100;
        }
        
        if(item.gender==null){
            result.innerHTML=`
            <div class="bottom">
            <p class="error">Name not found</p>
            </div>
            `
        }else{
            result.innerHTML=
            `
            <div class="bottom">
            <img src="${item.gender=="male"?"https://cdn-icons-png.flaticon.com/512/1019/1019172.png":"https://cdn-icons-png.flaticon.com/512/1019/1019173.png"}" alt="">
            <p>${item.gender.toUpperCase()}</p>
            <p>Probability: <span class="resSpan">${probability()}%</span></p></div>
            `
            const probabilitySpan = document.querySelector(".resSpan");

                if (probability() > 90) {
                    probabilitySpan.style.color = "green";
                } else if (probability() > 70) {
                    probabilitySpan.style.color = "orange";
                } else {
                    probabilitySpan.style.color = "red";
                }
        }  
    })
})