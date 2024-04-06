//foreach
//map
//filter

let demoArray = [3, 5, 4, 3, 6, 5, 8, 7];
/* filter and map mehtods return type is always an array*/
let filterArray = demoArray.filter(item => {
    if (item > 4) {
        return item;
    }
})

// console.log('demoArray_____',demoArray.length ,"\n demoArray",demoArray)
// console.log('filterArraylength_____',filterArray.length ,"\n filterArray",filterArray)

/*********** For Eachhhhhhhhh loop for array
 forEach method of array takes an callback fucntion as parameter and  that call back fuction 
 may can have 2 paramenters one as value of index and other will be index of the value
 */
function multtiplyBy2(value, index) {
    console.log(`value is ${value} and index is ${index}`)
}
demoArray.forEach(multtiplyBy2)
/** 
 for eabch is old than for of loop thus we can see m=forEach more often as compare to 
 for of Loop
 */