// Find the Second Maximum Number in an Array

const SecondMaxNumInArray = (arr) => {
    let max = arr[0];
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
        
      }
    }
    return max;
  };
  console.log(SecondMaxNumInArray([1, 2, 3, 4, 5, 3343]));
  