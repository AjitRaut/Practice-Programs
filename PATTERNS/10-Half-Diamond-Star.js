// Pattern - 10: Half Diamond Star Pattern

// *
// **
// ***
// ****
// *****
// ******
// *****
// ****
// ***
// **
// *

const printHalfDiamondStar = (N) => {
  for (let i = 1; i <= N; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "*";
    }
    console.log(row);
  }
  for (let i = 1; i <= N; i++) {
    let row = "";
    for (let j = N - 1; j >= i; j--) {
      row += "*";
    }
    console.log(row);
  }
};

printHalfDiamondStar(6);
