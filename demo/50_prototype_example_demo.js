/*** Lets demonstrate the learning of protyping on funciton */

//Create a function that creates user objects

function createUser(firstName, lastName, age, address) {
    /****in previous file we had creted user as below 
      const user = Object.create(userMethods);
      to get access the of __proto__ of returned user and call the __proto__
      functions here we'll do it using prototype property
     * ****/
    const user = Object.create(createUser.prototype)
    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;
    user.address = address;

    return user;
}
/*** Adding prototype property methods as per our requirements */

createUser.prototype.about = function () {
    console.log(`${this.firstName} is ${this.age} years old and lives in ${this.address}`)
};
createUser.prototype.isAdult = function () {
    console.log(`${this.firstName} is ${this.age >= 18 ? 'Adult' : 'Minor'}`)
};

const user1 = createUser("Arman", 'khan', 34, 'Pune');
const user2 = createUser('Vishal', 'Jaiswal', 3, 'Boisar');

user2.isAdult();//O/P--->>> Vishal is Minor
user1.about();//O/P---->>> Arman is 34 years old and lives in Pune;


/***
 * 
 * thus above what we did is we created a fucntion of name createUser
 * and it returns an Object by creating users now in L11 we made
 * the user object by using Object.create(createUser.prototype)
 * this line will make use of createUser functions prototype as
 * proto of user object and thus if we call any key which is not
 * prestent in created user it will further search in createUser
 * functions prototype object if we hade added key in that which in
 * this cae we had added as about method and isAdult method user1 and
 * user2 afre directly ab;e to access the function and unlike previously 
 * methods we do not need to add another object and add key functions
 * or ley value sonthat it can be passed in proto of user type objects
 * ***/ 