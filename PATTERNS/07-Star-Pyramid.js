// Pattern - 7: Star Pyramid

//      *
//     ***
//    *****
//   *******
//  *********
// ***********

const printStarPyramid = (N) => {
  for (let i = 1; i <= N; i++) {
    let row = "";
    for (let j = 1; j <= N - i; j++) {
      row += " ";
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
      row += "*";
    }
    console.log(row);
  }
};

printStarPyramid(6);
