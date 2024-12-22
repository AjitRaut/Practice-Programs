// Pattern-1: Rectangular Star Pattern
// * * * * * *
// * * * * * *
// * * * * * *
// * * * * * *
// * * * * * *
// * * * * * *

const printSquare = (N) => {
  for (let i = 1; i <= N; i++) {
    let row = "";
    for (let j = 1; j <= N; j++) {
      row += "*";
    }
    console.log(row);
  }
};

printSquare(3)
