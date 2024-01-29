const fruits= ['mango','grapes','guvava','berrys','apple', 'banana'];


const [value1, value2, ...remaingFruits] = fruits;

console.log("value fo value1",value1);
console.log('value of value2',value2);
console.log("remaingFruits are these",remaingFruits);

const [val1,val2] = remaingFruits;

console.log('value fo val1',val1);
console.log('value fo val2',val2);