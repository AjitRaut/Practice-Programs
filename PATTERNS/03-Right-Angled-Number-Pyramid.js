// Pattern - 3: Right-Angled Number Pyramid
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// 1 2 3 4 5 6

const printRightAngledNumberPyramid = (N) => {
  for (let i = 1; i <= N; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += j;
    }
    console.log(row);
  }
};

printRightAngledNumberPyramid(6);
