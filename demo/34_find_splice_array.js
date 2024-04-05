//find in array

const animal = ['elephant', 'horse', 'cat', 'dog', 'cow'];

const isLength3 = (string) => {
    return string.length === 3;
}

const value = animal.find(isLength3);

// console.log(value)


const userList = [
    { userName: 'vaibhav', userId: 5 },
    { userName: 'vai', userId: 3 },
    { userName: 'vishal', userId: 6 },
    { userName: 'ajay', userId: 1 },
    { userName: 'rajjo', userId: 7 },
    { userName: 'arman', userId: 8 },
    { userName: 'tiwari', userId: 2 }
]

const userWithUserId6 = userList.find((user) => user.userId === 6);

// console.log(userWithUserId6);

//so the find function is used in array method to find a value in array which is 
//unique

/* EVERY METHOD */
const numbers = [4, 6, 8, 0, 2, 44];

const is_array_even = numbers.every((num) => num % 2 === 0);

// console.log(is_array_even)


const applicantList = [
    { name: 'vaibhav', age: 19, gender: 'M' },
    { name: 'vai', age: 43, gender: 'M' },
    { name: 'vav', age: 45, gender: 'M' },
    { name: 'bhav', age: 20, gender: 'M' },
    { name: 'ved', age: 19, gender: 'M' },
    { name: 'vinod', age: 40, gender: 'M' },
    { name: 'vinay', age: 22, gender: 'M' },
    { name: 'vipin', age: 25, gender: 'M' },
];

const are_applicants_adult = applicantList.every((value) => value.age >= 18)

// console.log(are_applicants_adult)


//so above is an example of every method of array it takes an call back function
//return only tru of all condition in callback for each element in array is true
//else false


const lunchMenue = ['fruit', 'juice', 'snacks', 'chutney', 'sweets', 'deserts'];

let isSweetthere = lunchMenue.some(value => {
    return (value == 'sweets' || value == 'deserts')
})

// console.log("does menu has sweets",isSweetthere);

/* some method of array in JS takes a callback and returns true if any of the 
   value true unlike every as if any of the element in array is true as per callback
   function it will return true
*/






/*************fill method of array in JS */

const array = new Array(10).fill('&');
// console.log(array);


const numberArray = [21, 2, 3, 4, 5, 6, 7, 8, 9, 0];

numberArray.fill('*', 4, numberArray.length);
// console.log(numberArray)
numberArray.fill('*')
// console.log(numberArray)

//we can use fill in 2 ways one is at L80 in this will fill all the array element
// with the value passed in fill method 
// and else if we had passed three parameter to fill method first will be what to 
//be filled and second is from where to be filled and third will be till when it 
// has to be filled




/*** SPLICE method is used when we want to delete or insert something in array */

//splice method array.splice(start,delete,insert)

// start delete insert
const itemList = ['item1', 'item2', 'item3', 'item4']
//delete

// const deletedItem = itemList.splice(1,1);
// console.log(deletedItem, itemList)

/** so the splice has above as 2 parameter one will take the starting index
 * other will take how much item has to be deleted and in return it will give the 
 * deleted element
 */

//insert 

// itemList.splice(1, 0, 'inserted item');

//  console.log(itemList, newArray);

//so above L118 will insert an item as 'inserted item' at 1st position in array


//delete and insert at same time

const deletedvalue = itemList.splice(2, 1, 'updated item3');

console.log(deletedvalue, itemList)


//so L127 will delete one item from postion 2 and insert an updated string
// as 'updated item3'