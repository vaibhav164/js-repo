// let list = ['boy', 'girl', 'family', 'pandit'];
let list = ['boy', 'girl', 'family'];

const marrage = new Promise((resolve, reject)=>{
    if(list.includes('boy') && list.includes('girl') && list.includes('family') && list.includes('pandit')){
        resolve("Congratulations!!! for Marrage")
    }else {
        reject("Yet to Happen")
    }
})

marrage.then((data1)=>{
    console.log(data1)
},(data2)=>{
    console.log(data2)
})

/* So Promise is used ot handle the future event it takes a callback function and that callback function takes 2 parameters
and that 2 are also a function one for resolve and other for reject state of promise

To handle that Promise we can use .then methond and it take 2 callback functions parameters and each of the callback can 
parameter as values passed in Resolve or reject state


This is how a promise works bro!!!!
*/