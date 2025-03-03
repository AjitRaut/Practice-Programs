// Partition Array According to Given Pivot


var pivotArray = function (nums, pivot) {
  let equalSum = [];
  let bigNum = [];
  let smallNum = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < pivot) {
      smallNum.push(nums[i]);
    } else if (nums[i] === pivot) {
      equalSum.push(nums[i]);
    } else {
      bigNum.push(nums[i]);
    }
  }

  return [...smallNum, ...equalSum, ...bigNum];
};

let nums = [9, 12, 5, 10, 14, 3, 10];
let pivot = 10;

console.log(pivotArray(nums, pivot));
