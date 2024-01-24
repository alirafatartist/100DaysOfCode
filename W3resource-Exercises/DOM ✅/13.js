let div =document.querySelector("div#wh")
window.onload=getSize()
function getSize(){
    div.innerHTML=`
    <p>Width: ${window.innerWidth}</p>
      <p>Height: ${window.innerHeight}</p>
    `
}