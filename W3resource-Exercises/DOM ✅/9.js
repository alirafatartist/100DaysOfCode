function getOptions() {
  let select = document.querySelector("select");
  alert(select.length);
  let res = "";
  for (let i = 0; i < select.length; i++) {
    res += select.children[i].value+",";
  }
  alert(res);
}
