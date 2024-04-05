//sets are like array but it has some differences

//stores data
//sets are iterable
//set also have its own methods
//no index-based access
//order is not guaranteed
//unique items only {it cannot have duplicate elements}

const myFirstSet = new Set([3, 4, 6, 3, 5]);
// console.log(myFirstSet);
//in above L10 it will only store 3 for once

// console.log(myFirstSet['3']);
//in L15 we cant access the elements of set using index as it may can't have ordered
//for or elements

const mySecondSet = new Set("vaibhav");

// console.log(mySecondSet);

//we can add any iterable element in set e.g., string or array

//how to add element in set and delete the element in set

const newSet = new Set();
newSet.add(5)
newSet.add(3)
newSet.add(4)
newSet.delete(3)
// console.log(newSet)


//to check wheather the element is there in set or not

const myName = new Set('vaibhav');

//to check wheather the element is present in set or not use method has

myName.has('h');

// this will return true if element is present else will retrun false


/** as set are iterable we can use for of loops to access the elements in
 * set e.g.,
 */

const loopSet = new Set();

loopSet.add(1);
loopSet.add(2);
loopSet.add(3);
loopSet.add(4);
loopSet.add(5);
loopSet.add(16);
loopSet.add(17);
loopSet.add(['vaibhav', 'vishal']);

for (item of loopSet) {
    // console.log(item)
}
// so from L60 we can see that we can access the element of set

/******* set can also be used to find the unique element or remove repeated 
 * elements in array
 */

let myArray = [2, 2, 2, 3, 4, 5, 56, 6, 78, 666, 7, 7, 7, 6, 56];

const uniqueElements = new Set(myArray);

console.log(uniqueArray);

//by doing this we can remove repeated elements of array and get all unique one