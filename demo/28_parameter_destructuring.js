/***
 * 
 Parameter destructuring

 Parameter destructuring is done in objects and its mostly used in React
 */

const userDetails = {
   name: 'vaibhav',
   lastName: 'singh',
   gender: "M"
};


const printUserDetails = (userInfo) => {
   console.log("Name of user is ", userInfo.name, "and last Name is", userInfo.lastName, 'and gender is ', userInfo.gender)
}

//  printUserDetails(userDetails);


/**
 the above thing can also be achived using parameter Destructuring e.g., below
 */

const printUserdetails = ({ name, lastName, gender, age = 0 }) => {
   console.log("name is ", name)
   console.log("lastName is ", lastName)
   console.log("gender is ", gender)
   console.log("age is ", age)
}

printUserdetails(userDetails);

/**
 so in above at L26 i had destructured the value of userDetail boject and 
 used extra value of age and as its not availeable in userDetails object
 thus used its default value as 0
 */