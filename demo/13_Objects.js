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
console.log(userDetails['last name']); 