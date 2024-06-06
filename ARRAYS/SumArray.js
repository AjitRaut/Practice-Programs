// Calculate Sum of the Elements of the Array


const SumArray=(arr)=>{
    let sum=0;
for(i=0;i<arr.length;i++){
        sum+=arr[i]
}
return sum
}
let arr=[1,2,3,4,5];
console.log(SumArray(arr))