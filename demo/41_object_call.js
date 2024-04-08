function demoCall() {
    console.log('inside demoCall function')
}
// demoCall();
// demoCall.call();

/**
 * call method of js can also be used to call a funciton as e.g above L5
 * demoCall function can also be called using () but can also be called 
 * using call method 
 * 
 * 
 * lets see another implementation and use of call method
 */

const user1 = {
    name: 'Vaibhav',
    age: 3,
    log: function () {
        console.log(`${this.name} is ${this.age} years old`)
    }
}

const user2 = {
    name: 'Ansu',
    age: 5
}

/**In above example we have user1 and user2, user1 has a fucntion as log
 * if we want to use this fucntion for user2 as well we can do this using
 * call method
 */

// user1.log()
//user1.log.call()
// user1.log.call(user2)


/***
 * now in above L34 if we call user1.log this will give O/P  as:-
 * Vaibhav is 3 years old
 * but if we call it using call method as a call method has instance of this
 * as parameter as its an optional parameter so one can pass it or leave it
 * 
 * but in L36 we had called the log function of user1 but we passed object
 * user2 to it the call function will treat the instance of this by user2 
 * thus we get O/P as below
 * 
 *   Ansu is 5 years old
 * 
 * but in L35 as we didn't passed any object to as parameter to call method
 * it will give O/P as this:===>>>> undefined is undefined years old
 */


//Passing parameter using call method;

const userDatails = {
    name: 'vaibhav',
    'contact': 9145860,
    hobby: function (music, food) {
        console.log(`${this.name} likes to eat ${food} and listens ${music} and contact is ${this.contact}`);
    }
}

//now to call this using call method below is the demo

// userDatails.hobby.call(userDatails, 'Samosa', 'Bhajans')

/***
* so L68 O/P will be as ----->>>>
vaibhav likes to eat Bhajans and listens Samosa and contact is 9145860
______________________________________________________________________
now thus from L68 we have learned that call's method first parameter is
instance of this from respective passed object and after other are
can be parameters of the function which are called 
 */

function printName(food, contact) {
    console.log(`${this.name}'s age is ${this.age} and likes to eat ${food}, 
        and contact Number is ${contact}`)
}

const firrstUser = {
    name: 'Vaibhav',
    age: 4
}
const secondUser = {
    name: 'Vishal',
    age: 40
}

//now lets see how to inject this printName method to the above objects
// of L84 and L88 as firrstUser and secondUser

printName.call(firrstUser, 'fish', 123456)
printName.call(secondUser, 'kachori', 784343)

//as in above L96 and L97 we had used the method and called it with an
//instance of firstUser and secondUser and passed respective parameter for
//food and contact