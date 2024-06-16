// Reverse a given Array

const ReverseArray=(arr)=>{
  let reversarr=[];
  for(let i=arr.length-1;i>=0;i--){
    reversarr.push(arr[i])
  }
  return reversarr
}
let arr=[4,5,3,4,5,9]
console.log(ReverseArray(arr))