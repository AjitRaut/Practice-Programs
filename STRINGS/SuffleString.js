// Suffle String.

var restoreString = function(s, indices) {
    let sArray=new Array(s.length)
    for(let i=0;i<s.length;i++){
       sArray[indices[i]]=s[i]
    }
    return sArray.join('')
};
console.log(restoreString("codeleet",[4,5,6,7,0,2,1,3]))