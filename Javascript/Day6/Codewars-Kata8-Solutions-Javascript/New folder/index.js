const MyArray = [-1, -3, -6, 8, 10, 20, 19, -12];
function Sum_Of_Positives() {
  let result = 0;

  for (let i = 0; i < MyArray.length; i++) {
    if (MyArray[i] > 0) {
      result += MyArray[i];
    }
  }
  console.log(result);
}
Sum_Of_Positives();
