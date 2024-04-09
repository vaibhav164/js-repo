/***** In Js functions works as fucntion but they are also objects let me 
 demonstrate you
*/

const helloFunction = () => {
    console.log("Hello funcuton Log")
}

// console.log(helloFunction.name)// O/P-> helloFunction
/**so from L9 we can see that we can get name of function by using key of function
 * of keyname 'name' thus it too demonstrate that function can also act as a Object
 * in JS
 */

//We can add our Own properties as well as below

helloFunction.demoProperty = 'Test to check that function can act as Object in JS'

// console.log(helloFunction.demoProperty);//O/P->Test to check that function can act as Object in JS

/** function provides lots of properties eg call bind apply similarly it do has some
 * other properties that is a function gives us a free space i.e., an empty object {}
 * this empty object is called as prototype<<<<_________
 */

/***e.g., let see after logging the prototyupe of an function */
function helloDemo() {
    console.log('INside Hellow Demo');
}
// console.log(helloDemo.prototype) //O/P===>> {}

/****this gives us an empty iobject inside we have an key value pair as
 * constructor and value of constructor is that hellowDemo function
 * */

// helloDemo.prototype.constructor();//---->>>INside Hellow Demo
/******________ Only functions have a property of prototype and that too in normal 
 * function an arrow function do not have this property of prototype
 */

/***** ________Use of prototype__________ in function______*****************/

function demofunction() {
    console.log("inside Demofunciton");
}

//as we know any normal function has property of prototype which is an empty object
//lets add key value pairs to it

demofunction.prototype.key1 = 'Prottype value 1';
demofunction.prototype.key2 = "Value 2";
demofunction.prototype.run = function () {
    return 'Running...'
}

// console.log(demofunction.prototype)
/**
O / P for above log L56 ====>>>>> {
    key1: 'Prottype value 1',
    key2: 'Value 2',
    run: [Function(anonymous)]
} 
**/

//Lets execute the function of prototype

console.log(demofunction.prototype.run()) //O/P---->>>> Running...