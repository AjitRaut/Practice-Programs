// Pattern-2: Right-Angled Triangle Pattern
// *
// * *
// * * *
// * * * *
// * * * * *
// * * * * * *

const printRightAngledTriangle = (N) => {
  for (let i = 1; i <= N; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "*";
    }
    console.log(row);
  }
};

printRightAngledTriangle(6);
