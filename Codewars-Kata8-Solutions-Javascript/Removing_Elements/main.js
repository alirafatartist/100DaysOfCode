const Removing_Elements = (arr) => {
  let rsultArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (i == 1) {
    } else {
      rsultArray.push(arr[i]);
    }
  }
  return rsultArray;
};
console.log(Removing_Elements(["ali", "moahamed", "mohsen", "gamal"])); //['ali', 'mohsen', 'gamal']
