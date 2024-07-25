//Revice new key word
/***** 
 so new does 3 things.
 1. creates object of fucntion name 
 2. this of that aobject will be the values of object and 
    new will return this
 3. and new will create link between the function's
    object and prototype of it directel;y for that we do not have
    to do that way 
    const Object1 = Object.create(functionName.prototype)

    this thing will be handled by new keyword below is example
*/

function exampleFunction(firstname, contact){
    this.firstname=firstname;
    this.Mob= contact
}
exampleFunction.prototype.exampleInfo=function(){
    console.log(this.Mob, this.firstname)
}
const example1 = new exampleFunction('vaibhav', 91584023023)
/***
 now new will create object of the function and return's this fot it
 now if we create prototype of exampleFunction and we create new instance 
 of exampleFunciton new key word create direct link between the prototype
 and function this value e.g., as can be seen
 */

 example1.exampleInfo()