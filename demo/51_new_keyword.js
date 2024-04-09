/***** lets learn about new key word */

function createBucketItem(itemName, quantity, unitPrice) {
    this.itemName = itemName;
    this.quantity = quantity;
    this.unitPrice = unitPrice;
}
createBucketItem.prototype.totalPrice = function () {
    console.log(`Total Price of ${this.quantity} number of ${this.itemName}s is ${this.quantity * this.unitPrice}`)
}
const item1 = new createBucketItem('Phone', 5, 5);
const item2 = new createBucketItem("earphones", 4, 250);

// item1.totalPrice();

//Now we can see that in above example we not even need to create an 
// object to return an object in normal function as in normal function
// this is also an object and once we add key value pairs to this 
//we can access to it and while prototyping the totalPrice function
//we can use it to get as O/p as per out requirement the major benefit 
//or new is that we do not need to do that Object.create(createBucketItem.prototype)
//as  this function it self has this object we can directly use it 


/******_____Now lts demonstrate Another example for it */

function createStudent(name, std, age, contact) {
    this.name = name;
    this.age = age;
    this.std = std;
    this.contact = contact;
}
createStudent.prototype.getLog = function () {
    return console.log(`student name is ${this.name} age is ${this.age} and mobile number is ${this.contact}`);
}

const student1 = new createStudent('Samay', 5, 75, 304985345);
const student2 = new createStudent('Nidhi', 4, 5, 23424);

/**** Now we have prototype method to createstudent function and student1 
 * and student2 object can directly access these methods as below */

student1.getLog();//student name is Samay age is 75 and mobile number is 304985345
student2.getLog();//student name is Nidhi age is 5 and mobile number is 23424

/***** So as of now i can conclude that using new key word for an Object
 * or function makes the prototype method or key values __proto__ of assigned values
 * 
 * which in this case are student1 and student2 here new keyword of 
 * createStudent function makes the prototype object keys __proto__ object
 * keys of student1 and student2
 */