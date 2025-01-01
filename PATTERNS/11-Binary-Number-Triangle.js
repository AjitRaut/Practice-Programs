// Pattern - 11: Binary Number Triangle Pattern

// Input Format: N = 6
// Result:
// 1
// 01
// 101
// 0101
// 10101
// 010101

const printBinaryNumberTriangle = (N) => {
  for (let i = 1; i <= N; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += j % 2 === 0 ? "0" : "1";
    }
    console.log(row);
  }
};

printBinaryNumberTriangle(6);
