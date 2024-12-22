// Pattern - 6: Inverted Numbered Right Pyramid
// 1 2 3 4 5 6
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1

const printInvertedNumberedRightPyramid = (N) => {
  for (let i = 1; i <= N; i++) {
    let row = "";
    for (let j = 1; j <= N - i + 1; j++) {
      row += j;
    }
    console.log(row);
  }
};

printInvertedNumberedRightPyramid(6);
