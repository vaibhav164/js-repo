//Map object stores same key value pairs as Objects but has some diffrence 


//to create a map object we do it as below

const firstMapObj = new Map();

//to add element in Map Object

firstMapObj.set('FirstName', 'vaibhav');
firstMapObj.set('LastName', 'singh');
firstMapObj.set('age', 99);
firstMapObj.set(9, 9158402302);
//so to add element in Map Object we use its set method it will take 2 params
//fisrt is key name and other is key value as in L10 FusrstName is key name 
//and vaibhav is key value of key name firstName

/****** the major difference inObject and Map Object is that object can only 
 * have key of type string or symbol but Map object can have key or any type
 * */
// console.log(firstMapObj);


//to get the value of MapObject we user get
// console.log(firstMapObj.get(9))


//to get all key in Map Objects
// console.log(firstMapObj.keys())

const mapObject = new Map();
mapObject.set('fisrt', 23)
mapObject.set('second', 2)
mapObject.set('third', 'demo')
mapObject.set('forth', 4)

// for(key of mapObject){
//     console.log(key)
// }

//as the above key give array with keyname and value we can destructure it as below

for ([keyName, keyValue] of mapObject) {
    // console.log(keyValue);
}

//so here we can use for of in mpa Objects and get there values

/************** the order at which the values are set in Map Object it will
 * be in same way
 */



/**** new way to add elements in Map */

const person = new Map([['name', 'vaibhav'], ['age', '99'], ['country', 91]]);

// console.log(person)

const personDetail = {
    name: 'vaibhav',
    age: 45
};

const personalValue = new Map();
personalValue.set(personDetail, { country: 91, number: 9158402302 });

// console.log(personDetail, personalValue)

//now lets try to get number of personalDatail

console.log(personalValue.get(personDetail).number)


/*****
 * above we did is that we made an object a key to the map object and stored value
 * of that key in map using set method by this the persondetail object
 *  who has name and age as vaibhav and 45 now act as key to map in personalValue
 * and we can get the number of key value of map by geting the personalValue and 
 * acessing its number 
 */







const newObject = {
    name: 'vaibhav',
    lastName: 'Singh',
    age: 33,
    3: 9158402302
};
//we cannot use for of in Object but can acecess the value of key using for in 
// loop
// for(key in newObject){
//     console.log(`${key}: ${newObject[`${key}`]}`)
// }