// Check The Both Strings Are Equivalent Or Not return True Or false.

var arrayStringsAreEqual = function (word1, word2) {
  word1 = word1.join("");
  word2 = word2.join("");

  return word1 === word2;
};
let word1 = ["ab", "c"],
  word2 = ["ad", "bc"];
console.log(arrayStringsAreEqual(word1, word2));
