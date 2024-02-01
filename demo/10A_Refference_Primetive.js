// let learn some important points in JS


// Reference Type

let a ={name:'vaibhav', age:22};
let b = a;
console.log(b) //O/p {name:'vaibhav', age:22}
a= {name:'#####v', age:22};

console.log(a) //O/p {name:'#####v', age:22}
console.log(b) //O/p {name:'vaibhav', age:22}



/*
So as per my current observation reference type store the refernce of object 
value not the variable value as in above code L7 b stores the reference value of Object
not the reference of a 
so if we update the value of object the the value of b will be affected else nothing will be affected
e.g., if we updater ther value of a it will not update the value of b as they both are
reference type
**/

