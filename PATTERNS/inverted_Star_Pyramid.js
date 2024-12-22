// Pattern - 8: Inverted Star Pyramid

// ***********
//  *********
//   *******
//    *****
//     ***
//      *

const printInvertedStarPyramid = (N) => {
  for (let i = 0; i < N; i++) {
    let row = "";
    for (let j = 0; j < i; j++) {
      row += " ";
    }
    for (let j = 0; j < 2 * (N - i) - 1; j++) {
      row += "*";
    }

    console.log(row);
  }
};

printInvertedStarPyramid(5);
