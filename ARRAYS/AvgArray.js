// Average of all the elements in the array

const AvgArray = (arr) => {
  let avg = 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    avg = sum / arr.length;
  }
  return avg;
};
let arr = [1, 2, 1, 1, 5, 1];
console.log(AvgArray(arr));
