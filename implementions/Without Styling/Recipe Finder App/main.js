// https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast

const input = document.querySelector("input");
const btn = document.querySelector("button");
const recipeResults = document.getElementById("recipeResults");

const get = () => {
  if (input.value == "") {
    alert("please enter the ingredient");
  }else{

      fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${input.value}`).then((res)=>{
        if(!res.ok){
            alert('ingredient not found');
        }
        return res.json()
      }).then((data)=>{
        console.log(data['meals']);
        recipeResults.innerHTML=``
        for(let i =0;i<=data['meals'].length;i++ ){
            const recipeCard = document.createElement("div");
            recipeCard.innerHTML =
            `
            <p>${data['meals'][i]['strMeal']}</p>
            <img src="${data['meals'][i]['strMealThumb']}" alt="">
            `
            recipeResults.appendChild(recipeCard)
        }

      })
  }
};
