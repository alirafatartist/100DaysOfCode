// 5. Write a JavaScript program to rotate the string 'w3resource' in the right direction. This is done by periodically removing one letter from the string end and attaching it to the front.

// <div id="content" >W3courses</div>

function animate_string(id) {
  let main = document.getElementById(id);
  let submain = main.childNodes[0];
  let textvalue = submain.data;

  setInterval(() => {
    textvalue =
      textvalue[textvalue.length - 1] +
      textvalue.substring(0, textvalue.length - 1);
    submain.data = textvalue;
  }, 200);
}
animate_string("content");
