//Lest see hoisting in JS
// console.log(this);
// console.log(myName);
// console.log(myFunction);


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