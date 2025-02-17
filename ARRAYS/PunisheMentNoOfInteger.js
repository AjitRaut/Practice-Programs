var punishmentNumber = function (n) {
  let sum=0

  for (let i = 0; i <= n; i++) {
      sum += i *i
  }
  return sum
};
console.log(punishmentNumber(10));
