// Acronymword

var isAcronym = function(words, s) {
    if(words.length!==s.length){
        return false;
    }

    for(let i=0;i<words.length;i++){
        if(words[i][0]===s[i]){
            return true
        }else{
            return false
        }
    }
};
console.log(isAcronym( ["dvn","acafe"] ,"dp"))