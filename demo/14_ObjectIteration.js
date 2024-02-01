//Iteration an Object

const people= {
    name:'Vaibhav',
    lastName:'Singh',
    age:27,
    contactNumber:9158402302,
    height:5.10
};
//to iterate an Object in JS

for(value in people){
    // console.log(people[value])
}

const val = Object.keys(people); // Object.keys(people) returns array whith key names as string

//console.log(val);

//iterating Object using Objects.keys

for(let newValue of Object.keys(people)){
    console.log(newValue)
}

let userDetail={
    name:'vaibhav',
    lastName:'singh',
    age:24,
    address:{
        city:'Pune',
        district:'thane',
        state:'telangana',
        country:"India",
        pincode:401501
    }
}