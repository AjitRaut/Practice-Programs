var minimumRecolors = function(blocks, k) {
    let countW= 0;

    for(let i = 0; i<blocks.length;i++){
        if(blocks[i]===blocks[i + 1]){
            countW++
        }
    }
    console.log(countW)
    if(countW >= k){
        return 0
    }
    
};
let blocks= "WBBWWBBWBW";
let k = 7
console.log(minimumRecolors(blocks,k))