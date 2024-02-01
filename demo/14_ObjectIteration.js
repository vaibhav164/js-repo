//Iteration an Object

const people = {
    name: 'Vaibhav',
    lastName: 'Singh',
    age: 27,
    contactNumber: 9158402302,
    height: 5.10,
    hobbies: ['dance', 'sleeping', 'eating']
};

people.country = 'bharat';
//to iterate an Object in JS
for (value in people) {
    // console.log(people[value])
}
// console.log(people['country'])
/*
in array to add element we use push or shift method and in object we direactly 
add key name and assign it a value as in L17 
**/
const val = Object.keys(people); // Object.keys(people) returns array whith key names as string

//console.log(val);

//iterating Object using Objects.keys

for (let newValue of Object.keys(people)) {
    // console.log(newValue)
}

const userDetail = {
    name: 'vaibhav',
    lastName: 'singh',
    age: 24,
    address: {
        city: 'Pune',
        district: 'thane',
        state: 'telangana',
        country: "India",
        pincode: 401501
    }
}