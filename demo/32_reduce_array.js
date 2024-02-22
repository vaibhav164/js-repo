//reduce methods in array

const trailArray = [4,5,3,5,6,6,7,8];

/**
 reduce fuction in array takes an callback function and an optional parameter
 which is the innitial value of accumulator i.e., if we pass the initial value
 to accumulator the current value will cover from first value
 as parameter and that fuction 
takes 2 values 1st is an accumulator and other one is sum we can call them as any 
thing but first value will refer to accumumlater and other as current value 
 */

//Demo

const sum = trailArray.reduce((accumulator, currentValue)=>{
    return accumulator + currentValue;
})

const initialSumDemo = trailArray.reduce((accumulator, curentvalue)=>{
    return accumulator + curentvalue;
},20)
// console.log(sum)
// so in L20 to L22 it will have initial value of 20 to accumulator and the first
//value for curentValue will be 4 on trailArray
//so L23 will give a value of sum of above mentioned array

// [4,5,3,5,6,6,7,8]
//    accumulator  currentValue return
        // 4           5           9
        // 9           3           12
        // 12          5           17
        // 17          6           23
        // 23          6           29
        // 29          7           36
        // 36          8           44



let testArray =[3,3,4,2,5,3,34];
const result = testArray.reduce((accumulator,curentValue)=>{
    if(curentValue%2 == 0){
    return accumulator + curentValue;
    }
    return accumulator;
},0)

console.log(result)

const productCart =[
    {productName:'phone', productId:1,productPrice:2000},
    {productName:'pen', productId:2,productPrice:20},
    {productName:'bag', productId:3,productPrice:200},
];

const billAmount = productCart.reduce((totalPrice,curentProduct)=>{
    return totalPrice + curentProduct.productPrice;
},0)

// console.log(billAmount)