const newObject = {
    name: 'demo name',
    age: 33
};

// const secondObject = {...newObject};

newObject.key3 = 'test';
console.log(newObject)
// console.log(secondObject)

/***** above we are cloning object sing spred operator but can also be done using 
 * assign method
 * */

const thirdObj = Object.assign({}, newObject);

console.log(thirdObj)

//so L16 creates an Object as its inserting an newBoject keys value pairs to empty
//object
//Object.assign takes two pramwenters one is destination object and send as object
// to be merged 