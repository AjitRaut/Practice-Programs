// Write a function to find the largest and smallest number in an array.

// const findMin_Max = (arr) => {
//   let max = arr[0];
//   let min = arr[0];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//       console.log("max",max);
//     }

//     if (arr[i] < min) {
//       min = arr[i];
//       console.log(min);
//     }
//   }
//   return { max, min };
// };

// let arr = [2, 5, 1, 8, 3, 10];
// console.log(findMin_Max(arr));

// Write a function to reverse an array in place.

const reverArray = (arr) => {
  const reversArr = [];
  console.log(arr.length);

  for (let i = arr.length - 1; i >= 0; i--) {
    reversArr.push(arr[i]);
  }
  return reversArr;
};
let arr = [1, 2, 3, 4, 5];
console.log(reverArray(arr));
