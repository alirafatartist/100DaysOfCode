// 17. Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple the absolute difference if the specified number is greater than 19.  

let calc=(a,b=19)=>{
    return a>b?3*(a-b):b-a
}
console.log(calc(12));// 7
console.log(calc(19));// 0
console.log(calc(22));// 9