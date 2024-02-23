// optional chaining is nothing but using ? before access the value of Object
//so that it should not throw erro instead it should show undefined 

/****************                       Methods              */
//method is nothing but an function inside an Object

const userDetail ={
    name:'vaibhav',
    age:23,
    call: function(){
        console.log(this)
    }
}

// userDetail.call();
userDetail.name = 'vishal';
// userDetail.call();

//so to access data of specific object instance we use this keyword
// this in any object represent the current object 
//as in L11 log of this give the value of complete objects as below
/***
 { name: 'vaibhav', age: 23, call: [Function: call] }
 */
function printPernInfo(){
    console.log(`Person name is ${this.name} and age is ${this.age} lives in ${this.state}`)
}

 const person1 ={
    name:'vaibhav',
    age:23,
    state:'maharashtra',
    action:printPernInfo
 };
 const person2 ={
    name:'Vishal',
    age:23,
    state:'UP',
    action:printPernInfo
 };
 const person3 ={
    name:'Ashish',
    age:23,
    state:'Odisa',
    action:printPernInfo
 };

//  person1.action();
//  person2.action();
//  person3.action();

 //thus we can conclude that this works only for normal function declaration 
 /*** not in arrow function and this in normal function delcaration represents 
  * instance of object in short to that object
  *  */  

 //this gives value 


 const thisTest ={
    name:'vaibhav',
    age:23,
    action:function valueCall(){
        console.log(this)
    }
 }

 thisTest.action();
