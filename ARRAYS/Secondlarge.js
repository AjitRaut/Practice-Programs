// Find Second Smallest and Second Largest Element in an array

const SecondSmallLarge = (arr) => {
  let Secondsmall;
  let Secondlarge;
  let arrsort = arr.sort();
  for (let i = 0; i < arr.length; i++) {
    Secondsmall=arr[1];
    Secondlarge=arr.length
  }
  return Secondlarge
};
let arr = [1, 4, 7, 7, 5,6];
console.log(SecondSmallLarge(arr));
