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

console.log("id console", id);
console.log("newId console", newId);
console.log(id == newId);



//**********BigInt

const bigNumber = 34525325234532523452345324532452345;  // this will automatically became an bigInt
const largeNumber = 2344n // if we add suffix n just next to a number in JS it automaticaly considers it a

// Reference type / Non Premitive type in JS
// types of Non Primitive Data type:- Array, Objects, Functions
//JS is Dynamically typed language when it comes to variable declarations (which means that we don't need to declare the type of variable before
// declaring it)

const fruits = ["mango", 'grapes', 'guvava', 'apple', 'orrange'];

const userList = {
    name: 'valibhav',
    age: 34,
    contact: 91394232,
    email: 'vai234234@gmail.com'
}

const myFunction = function () { console.log('New log for console value'); }
console.log(typeof fruits, typeof userList, typeof myFunction);
// typeof of array is object and object is object and function is function is object function



//+++++++++++++++++++++++++++++

//Types of memories 

// stack (Primitive Datatype) , Heap (Non Primitive Datatype)
// stack memory is used storing Primitive Data type, Heap memory is used for Non Promitive Data type

let userName = 'vaibhav132';
let newUserName = userName;
newUserName = 'HHHHHHHHHHHHH'

console.log(userName, newUserName);
// so if the data is of premitive type i.e., stack is updated or assingned to some other variable only its copy is beeing updated or created 




const UserDetailOne = {
    name: 'hellow',
    email: 'hellow.com'
};

const newUserDetailTwo = UserDetailOne;

newUserDetailTwo.email = 'newemail@gmail.com';

console.log(newUserDetailTwo.email, UserDetailOne.email);

const fruitArray = ['apple', 'orange', 'berry'];

const newfruitArray = fruitArray;

newfruitArray[2] = 'demo';

console.log(fruitArray[2], newfruitArray[2]);




//if the data is on non premitive type i.e., of Heap memory then if its assigned to another variable and then the both varibale reffer to same value means if we update any value from any of the variable, values for bothe variable will get updated
