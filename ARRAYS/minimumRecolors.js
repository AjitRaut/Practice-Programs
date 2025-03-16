var minimumRecolors = function(blocks, k) {
    let countW= 0;

    for(let i = 0; i<blocks.length;i++){
        if(blocks[i].includes("B")){
            countW++
            
        }
        if(countW <= k){
          blocks[i].includes("W")="B"
          countW++
        }
    }
    
    console.log(countW)
    
    
};
let blocks= "WBBWWBBWBW";
let k = 7
console.log(minimumRecolors(blocks,k))