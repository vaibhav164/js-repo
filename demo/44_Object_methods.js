/****
 ____________________common mistakes___________________________
 */

const user1 = {
    name: 'Ranvir',
    age: 45,
    about: function () {
        console.log(`${this.name} is ${this.age} years old`);
    }
}

// user1.about() o/P------>>>>Ranvir is 45 years old

// user1.about.call() O/P----->>>>>undefined is undefined years old

const displaydata = user1.about;
//displaydata();  o/P------>>>>>> undefined is undefined years old

/****
 Now at L13 we get this instance for user1 object as we directly call the
 function about 

 but in L15 we get this instance of window object thus ti has undefined 
 values for this.name and this.age

 not as in L17 if we store the function reference of user1.about in an
 variable and after that if we call it we get again undefiend bacause 
 the value of instance of 'this' id defined at place where that method is
 called so when the store referance of method is called it get intancve of 
 'this' from global window thus it gets undefined value for this.name or 
 this.age to get an specific instance of this we can use call bind or 
 apply methods in JS
 */