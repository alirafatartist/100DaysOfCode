// Here is a sample html file with a submit button. Now modify the style of the paragraph text through javascript code.
// Sample HTML file :

// <!DOCTYPE html>
// <html>
// <head>
// <meta charset=utf-8 />
// <title>JS DOM paragraph style</title>
// </head>
// <body>
// <p id ='text'>JavaScript Exercises - w3resource</p>
// <div>
// <button id="jsstyle"
// onclick="js_style()">Style</button>
// </div>
// </body>
// </html>

let button = document.querySelector("#jsstyle");
let text = document.querySelector("#text");
function js_style(){
    text.style.fontFamily = "Comic Sans MS";
    text.style.color="red";
    text.style.fontSize="30px"
}