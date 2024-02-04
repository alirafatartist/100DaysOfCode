// 77. Write a JavaScript program to test whether an array of integers of length 2 contains 1 or 3.  

let contains13 = (arr)=>{
    for(let i=0;i<arr.length;i++){
        if(arr[i]==1||arr[i]==3){
            return true
        }else{
           return false
        }
    }
}
console.log(contains13([1, 5]));    // Should return true, as 1 is present
console.log(contains13([2, 3]));    // Should return true, as 3 is present
console.log(contains13([7, 5]));    // Should return false, as neither 1 nor 3 is present
