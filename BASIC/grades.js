function StringChallenge(str) {
  // __define-ocg__: Initialize varOcg to track the largest number of unique characters between pairs
  let varOcg = 0;
  
  // Create an object to store the first occurrence of each character
  let charPositions = {};

  // Loop through the string to find matching characters
  for (let i = 0; i < str.length; i++) {
      let char = str[i];

      // If the character has been seen before, calculate the number of unique characters between the pairs
      if (charPositions[char] !== undefined) {
          let firstPos = charPositions[char];

          // Extract the substring between the two occurrences, excluding the matching characters
          let substring = str.slice(firstPos + 1, i); // Exclude the matching characters themselves
          
          // Count unique characters in the substring using a Set
          let varFiltersCg = new Set(substring).size;

          // Update varOcg with the maximum number of unique characters found
          varOcg = Math.max(varOcg, varFiltersCg);
      }

      // Store the current position of the character
      charPositions[char] = i;
  }

  // Return the result
  return varOcg;
}

// Test the function with example input
console.log(StringChallenge("mmmerme"));  // Expected Output: 3
console.log(StringChallenge("abccdefghi"));  // Expected Output: 0
