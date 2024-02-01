const fruits= ['mango','grapes','guvava','berrys','apple', 'banana'];


const [value1, value2, ...remaingFruits] = fruits;

// console.log("value fo value1",value1);
// console.log('value of value2',value2);
// console.log("remaingFruits are these",remaingFruits);

const [val1,val2] = remaingFruits;

// console.log('value fo val1',val1);
// console.log('value fo val2',val2);


const destructureArray = ['One',"two", "three", 'four', 'five'];

const [first1, second2, val3, ...restValueArray]=destructureArray;

console.log('new demo for array destructurring of array');
console.log(first1);
console.log(second2);
console.log(val3);
console.log(restValueArray);