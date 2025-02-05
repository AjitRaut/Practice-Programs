// Find The Even Number Digits In Given Array

var findNumbers = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let digitcount = 0;

    while (num !== 0) {
      digitcount++;
      num = Math.floor(num / 10);
    }
    if (digitcount % 2 == 0) {
      count++;
    }
  }
  return count;
};
console.log(findNumbers([12, 345, 2, 6, 7896]));
