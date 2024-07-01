// Given an integer array arr, return true if there are three consecutive odd numbers in the array. Otherwise, return false.

var threeConsecutiveOdds = function (arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      count++;
      console.log(count);
      if (count === 3) {
        return true;
      }
    } else {
      count = 0;
    }
  }
  return false;
};
console.log(threeConsecutiveOdds([1, 2, 34, 3, 4, 5, 7, 23, 12]));
