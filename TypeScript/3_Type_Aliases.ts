//this will address the issue of Object to be passed as argument with type safety in TS see below

type User ={
    personName:string;
    age:number;
    contact:number;
}

function userInfo(user:User):string{
    const {personName, age, contact} = user;

    return `User Name is ${personName} and age is ${age} mobile number ${contact}`
}

userInfo({personName:"Vaibhav", age:45, contact:434534});

/***
 Now in L15 you can see we can only pass the argument which is the type of paremeter of userInfo function in L9 as User
 if we pass anything more or less TS will give us error
 */

 export {}