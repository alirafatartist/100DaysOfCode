var getConcatenation = function (nums) {
  let n = [...nums];
  for (let i = 0; i < nums.length; i++) {
    n.push(nums[i]);
  }
  return n;
};
console.log(getConcatenation([1, 2, 3, 4])); // [1, 2, 3, 4,1, 2, 3, 4]
