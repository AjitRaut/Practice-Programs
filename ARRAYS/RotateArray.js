// Given an array of n size, rotate the array by k elements using the Block Swap Algorithm.

/*Examples:

Example 1:
Input: N = 5, array[] = {1,2,3,4,5} K=2
Output: {3,4,5,1,2}
Explanation: Rotate the array to right by 2 elements.

Example 2:
Input: N = 7, array[] = {1,2,3,4,5,6,7} K=3
Output: {4,5,6,7,1,2,3}
Explanation: Rotate the array to right by 3 elements.8*/

const rotatearray=(arr,k)=>{

    const n=arr.length;

    arr1=arr.slice(0,n-k);
    arr2=arr.slice(n-k);

    const rotatrr=arr2.concat(arr1);
    return rotatrr
}
let arr=[1,2,3,4,5];
let k=2;
console.log(rotatearray(arr,k))