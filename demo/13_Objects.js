//difference between bracket and . "dot" operator

const userDetails ={
    name:'vaibhav',
    age:45,
    contact:231
};

//adding a key of space value 
/*
userDetails.last name = 'singh'; //this will throw an ERROR
*/
//to do this we can do this;
userDetails['last name']="singh";

//similarly to access the value for key with space we should use bracket operator in JS
//console.log(userDetails['last name']); 

/*****************New Demo*/
/**
 now in this example we can see that to adda value of newValue as key in numberData we have to use bracket Operator

 if we use the dot operatot the key will be added of name newValue not as the value of newValue (i.e., data type)
 */
const numberData ={
    value:23,
    power:1,
};
const newValue = 'data type';

numberData[newValue]="number";
console.log(numberData)