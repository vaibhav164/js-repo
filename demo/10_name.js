const myNameFunction=()=>{
    return console.log("My name function is called");
}

// console.log(myNameFunction.name);

//line 5 will log the name of function myNameFunction

const UserDetail = {
    val1:{name:'vaibhav',id:2323},
    val2:{ name:'anuj',id:2354},
    val3:{name:'vishal',id:006},
};

//console.log(UserDetail.name) // undefined

//now the log for userDetail.name will give it undefined
//because by default it will be undeifined if its a custom object  or array or any custom variables for default it has a name eg.,

//console.log(Object.name); //Object
//console.log(Array.name); //Array

const days=['one','two', 'three', 'four'];

//console.log(days.name); // undefined

const value = 34;

console.log(value.name);
//we can give name to this custom array or objects by assiging it name as below;
//and the typeof of the name will depend on the typeof the value which is assigned to it
//e.g., if we assign name a string its typeof will be string and if name is integer will be number

UserDetail.name = 'newData';

console.log(typeof UserDetail.name); //newData
