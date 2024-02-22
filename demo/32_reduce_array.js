//reduce methods in array

const trailArray = [4,5,3,5,6,6,7,8];

/**
 reduce fuction in array takes an callback function as parameter and that fuction
takes 2 values 1st is an accumulator and other one is sum we can call them as any 
thing but first value will refer to accumumlater and other as current value 
 */

//Demo

const sum = trailArray.reduce((accumulator, currentValue)=>{
    return accumulator + currentValue;
})

console.log(sum)

//so L17 will give a value of sum of above mentioned array

// [4,5,3,5,6,6,7,8]
//    accumulator  currentValue return
        // 4           5           9
        // 9           3           12
        // 12          5           17
        // 17          6           23
        // 23          6           29
        // 29          7           36
        // 36          8           44



anuman