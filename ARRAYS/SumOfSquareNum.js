// Sum Of Square Numbers.
var judgeSquareSum = function(c) {
    let i=0;
    let sum;
    let j=Math.ceil(Math.sqrt(c));  //Here we get square root od that number
    // console.log(j)
    while(i<=j){                    
        sum=i*i+j*j;
        // console.log(sum)
        if(sum<c){
            i++
        }else if(sum>c){
            j--
        }else{
            return true;
        }
    }
    return false
};
console.log(judgeSquareSum(5))
console.log(judgeSquareSum(4))