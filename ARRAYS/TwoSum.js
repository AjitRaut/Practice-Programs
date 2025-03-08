var twoSum = function(nums, target) {
    let arr=[]
    for(let i=0;i<nums.length;i++){
        if(target === nums[i] + nums[i+1]){
            console.log(i)
        arr.push(i)
        }
    }
    return arr
};
console.log(twoSum([2,7,11,15],9))