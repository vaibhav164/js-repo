// optional chaining is nothing but using ? before access the value of Object
//so that it should not throw erro instead it should show undefined 

/****************                       Methods              */
//method is nothing but an function inside an Object

const userDetail ={
    name:'vaibhav',
    age:23,
    call: function(){
        console.log(`Person's name is ${this.name} and age is ${this.age}`)
    }
}

userDetail.call();
userDetail.name = 'vishal';
userDetail.call();

//so to access data of specific object instance we use this keyword