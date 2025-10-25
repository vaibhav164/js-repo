let rawArray = [2, 3, -8, 7, -7, 2, 15];

function getMaxSubArraySum(arr){
    let maxSum = arr[0];

    for(let i = 0; i < arr.length; i++){
        let currentSum = 0
        for(let j = i; j<arr.length;j++){
            currentSum = currentSum+arr[j];

            maxSum = Math.max(currentSum, maxSum);
        }
    }
    return maxSum
}

console.log(getMaxSubArraySum(rawArray))