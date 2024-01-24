let strongText = document.querySelectorAll("strong");
function highlight() {
  strongText.forEach(element => {
    element.style.color="green"
});
}
function return_normal(){
    strongText.forEach(element => {
        element.style.color="white"
    });

}


// Way2
