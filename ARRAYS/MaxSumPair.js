// Max Sum of a Pair With Equal Sum of Digits

var maximumSum = function(nums) {
    let sum = 0;
    while(nums > 0){
    sum = nums % 10
    nums/10;
    }
    console.log(sum)
    // for(let i = 0;i<nums.length;i++){
    // console.log(nums[i])
    // }
    
};
console.log(maximumSum([18,43,36,13,7]))