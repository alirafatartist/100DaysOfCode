let result = 0;
function Sum_Without_The_Highest_And_The_Lowest_Number(array) {
  if (array.length === 0) {
    return null;
  }
  let mx = Math.max(...array);
  let mn = Math.min(...array);
  let filterdArray = array.filter((x) => x != mx && x != mn);
  for (let i = 0; i < filterdArray.length; i++) {
    result += filterdArray[i];
  }
  return result;
}

console.log(
  Sum_Without_The_Highest_And_The_Lowest_Number([6, 9, 2, 2, 10, 60, 5])
); //30
