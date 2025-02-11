var arrayStringsAreEqual = function (word1, word2) {
//   if (word1.length !== word2.length) {
//     return "Strins are not equal";
//   }

  let str1 = word1.join("");
  let str2 = word2.join("");

  if (str1 === str2) {
    return true;
  } else {
    return false;
  }
};
console.log(arrayStringsAreEqual(["abc", "d", "defg"], ["abcddefg"]));
