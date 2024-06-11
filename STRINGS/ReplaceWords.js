// Replace words in Given sentence 

var replaceWords = function(dictionary, sentence) {
    let s = sentence.split(' ')

dictionary.sort((a, b) => a.length - b.length);

for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < dictionary.length; j++) {
        if (s[i].startsWith(dictionary[j])) {
            s[i] = dictionary[j]
            break
        }
    }
}
return s.join(' ')
}
console.log(replaceWords(dictionary = ["cat","bat","rat"], sentence = "the cattle was rattled by the battery"));