// Pattern - 9: Diamond Star Pattern

//   *
//  ***
// *****
// *****
//  ***
//   *
const printDiamondStar = (N) => {
  for (let i = 0; i < N; i++) {
    let row = "";
    for (let j = 0; j < N - i - 1; j++) {
      row += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
      row += "*";
    }

    console.log(row);
  }
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

printDiamondStar(3);