// Primitive Data type

// 7 types of primitive Data types in JS :- String, boolean, Number, null, undefined , Symbol, BigInt

const name = 'vaibhav';
const isAvailable = false;
const age = 27;
const currentTemperature = null;
const myEmail = undefined;


const id = Symbol('123');
const newId = Symbol('123');

//the point which needs to be noted here is that the above id and newId have same symbol value but still the both will be of different value. i.e., id will not be equal to newId;

console.log("id console",id);
console.log("newId console", newId);
console.log(id == newId);



//**********BigInt

const bigNumber = 34525325234532523452345324532452345;  // this will automatically became an bigInt
const largeNumber = 2344n // if we add suffix n just next to a number in JS it automaticaly considers it a

// Reference type / Non Premitive type in JS
// types of Non Primitive Data type:- Array, Objects, Functions
//JS is Dynamically typed language when it comes to variable declarations

const fruits= ["mango", 'grapes', 'guvava', 'apple', 'orrange'];

const userList ={   name: 'valibhav', 
                    age:34, 
                    contact:91394232, 
                    email:'vai234234@gmail.com'
                }

const myFunction = function(){ console.log('New log for console value'); }
console.log(typeof fruits, typeof userList, typeof myFunction);
// typeof of array is object and object is object and function is function is object function

