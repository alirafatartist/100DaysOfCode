const Returning_Negative_Number = (num) => (num < 0 ? num : 0 - num);
console.log(Returning_Negative_Number(0.12)); //-0.12
console.log(Returning_Negative_Number(0)); //0 not 0
console.log(Returning_Negative_Number(-4)); // -4
console.log(Returning_Negative_Number(8)); //-8
