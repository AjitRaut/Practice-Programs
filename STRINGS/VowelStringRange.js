// Count The Numbers Of vowels In String In Range.

var vowelStrings = function(words, left, right) {
    const vowels = "aeiou";
    
       let count = 0;
        
    for (let i = left; i <= right; i++) {
        let word = words[i];
      
        if (vowels.includes(word[0]) && vowels.includes(word[word.length - 1])) {
            count++;
        }
    }
    
        return count;
};
console.log(vowelStrings(["are","amy","u"],0,2));