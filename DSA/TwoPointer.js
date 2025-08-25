//Max Sum of sub array of of distinct elements of  length k in an array 

function hasDuplicateItem(array){
    let setList = new Set(array);
    return array.length != setList.size
}
function sumOfArray(arra){
    let sum = 0;
    for(item of arra){
        sum = sum + item
    }
    return sum;
}

function maSubArray(array, k){
    let right = k-1;
    let left = 0;
    let maxSum = 0;
    
    for(item in array){
        while(right < array.length){
            if(hasDuplicateItem(array.slice(left,right+1))){
                left++
                right++
                continue
            }
            let currentSum = sumOfArray(array.slice(left,right+1))
            maxSum = Math.max(maxSum,currentSum);
            left++
            right++
        }
    }
    return maxSum
    
}
console.log(maSubArray([4,4,4], 3))
