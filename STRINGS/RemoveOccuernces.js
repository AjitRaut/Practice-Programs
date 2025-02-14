var removeOccurrences = function(s, part) {
    while (s.includes(part)) {
        const index = s.indexOf(part);
        console.log("index",index)
        s = s.slice(0, index) + s.slice(index + part.length);
        console.log("s",s)
    }
    return s;
};
console.log(removeOccurrences(("daabcbaabcbc", "abc")))