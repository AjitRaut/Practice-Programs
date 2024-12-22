// Pattern-5: Inverted Right Pyramid

// * * * * * *
// * * * * *
// * * * *
// * * *
// * *
// *

const printInvertedRightPyramid = (N) => {
  for (let i = 0; i < N; i++) {
    let row = "";
    for (let j = 0; j < N - i; j++) {
      row += "*";
    }
    console.log(row);
  }
};

printInvertedRightPyramid(6);
