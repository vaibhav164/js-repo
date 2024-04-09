/****
 lets learn how an Object may can use to property of other object how to do that
 */

const object1 = {
  key1: 'Value1',
  key2: 'Value2'
}

/**lets create another object as object2 and lets see how we can get the
   keys of object1 in object 2 as below____________________
 */
//__________________*********below is one other way to create object____________
const object2 = Object.create(object1) //now if we log object2 it will be {} as below
// console.log(object2)//{}
object2.key3 = 'Value3'
object2.key4 = 'Value4'
// console.log(object2)//{ key3: 'Value3', key4: 'Value4' }

/**NOw lets see how to use the value of object1 in Object2 */
// console.log(object2)//{ key3: 'Value3', key4: 'Value4' }
// console.log(object2.key1, object2.key2)// Value1 Value2

//so here we can se that object2 didn't have value of object1 but it is created
//as in L14 with reference of object1 it can access the value of object1 as 
// in L22
/***********___________NOTE______ */
//Now if object2 has same key that Object1 has then Object2.keyName will always take
//Object2.keyName's value e.g.,

object2.key2 = 'Value2 for Object2';

//console.log(object2.key2)//O/P-> Value2 for Object2

//now if object2 didn't had key2 then it would had checked at object1 keys

// console.log(object2.__proto__)

// console.log(this.__proto__);

//thus on L14 we set prot of Object2 as object1


/**** there is other concept in JS as prototype its different than __prot0__ or
 [[prototype]]
 */

/****___Now let try to resolve the issue of methods passing in mulple Objects
 * using __proto__ below is example
 */
const userMethods = {
  about() {
    return console.log(`${this.firstName} is ${this.age} years old and lives in ${this.address}`);
  },
  isAdult() {
    return this.age >= 18
  }
}
const createUser = (firstName, lastname, age, address) => {
  const user = Object.create(userMethods);//this will make userMethods as proto of user object
  user.firstName = firstName;
  user.lastname = lastname;
  user.age = age;
  user.address = address;
  return user;
}

const user1 = createUser('Vinod', 'sawant', 45, 'Parle')
const user2 = createUser('Kini', 'wade', 2, 'Boisar')

/**Now we can see from L68 and L69 that we have created objects with name user1 and
   user2 but they didn't have keys or functions as about() or isAdult() but we had
   created the object using Object.create method and added __proto__ to it as well 
   thus we can access the or any user created using createUser() function can access
   userMethods because of __proto__ methods as below e.g.,
***/

user1.about();

console.log(`${user2.firstName} is ${user2.isAdult ? 'Adult' : 'Minor'}`)