// Pattern - 4: Right-Angled Number Pyramid - II
// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5
// 6 6 6 6 6 6

const printRightAngledNumberPyramidII = (N) => {
  for (let i = 1; i <= N; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += i;
    }
    console.log(row);
  }
};

printRightAngledNumberPyramidII(6);
