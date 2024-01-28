// 27. Write a JavaScript program to check whether a string starts with 'Java' if it does not otherwise.  
function check(str){
    return str.substring(0,4) =="Java"
}
console.log(check("Javascript")); // true
console.log(check("script")); // false