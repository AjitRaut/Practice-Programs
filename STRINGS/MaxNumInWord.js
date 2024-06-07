// Find Maximum Numbers From Given Sentence.

var mostWordsFound = function(sentences) {
    const mosword=sentences.map(item => item.split(' ')).sort((a,b) => b.length - a.length)[0].length
    return mosword
};
console.log(mostWordsFound(sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]))