// Move all zeros to the end


const moveZero =(arr)=>{
    const zeros = []
    const nonZero = []

    for(let i =0 ;i<arr.length;i++){
       if(arr[i]===0){
        zeros.push(arr[i])
       }else{
        nonZero.push(arr[i])
       }
    }
    return [...nonZero,...zeros]

}

console.log(moveZero([1, 2, 3, 0, 0, 0]
))