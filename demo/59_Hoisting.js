//Lest see hoisting in JS
console.log(this);
console.log(myName);
console.log(myFunction);


var myName = "Vaibhav";
function myFunction(){
    console.log("Inside My Function")
}

/***HEre we can see that executing this above code will not throw error because 
its being hoisted as its done using var so in that case what happens is that
once GEC is created the it looks after the scope of all variable an var has 
global scope and thus for initial instance its undefined and function is 
directly printed not throwen error as it is a tradictional function  O/P as below
{}
undefined
[Function: myFunction]
*/

/****For function expression */

console.log(this);
console.log(fullName);
console.log(fullNameFunction);


var fullName="Vaibhav Singh"
var fullNameFunction = function(){
    console.log("INside full Name function")
}

/*So  for above example fullNameFunction will be treated as varablve thus will
have O/P as below
{}
undefined
undefined
***/


/******___________________Let_________________________*/

console.log(letVariable);

let letVariable = 'demo data';
/***
 * here in above we get error because letVariable gets space in Global memory 
 * but its yet UNINITIALIZED thus we get error as below
 ____________ReferenceError: Cannot access 'letVariable' before initialization 
 thus we can say that let const and var all are hoisted but the value of let and
 const are UNINITIALIZED thus we get error
 */

console.log(gama)
 /********
  * Two type of error 
  * 1. _______ReferenceError: Cannot access 'letVariable' before initialization 
  * 2. _______ReferenceError: gama is not defined
  * there is diffrence between i.e., first error states that we have a variable 
  * but its value is not initalized
  * second error says that the value itself is not present 
  */
