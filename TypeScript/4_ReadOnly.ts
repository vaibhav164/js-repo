//Lets learn about READONLY optional and

type User ={
    readonly name:string
    age:number
    email:string
    cardDetail?:string
}

let myPerson:User ={
    name:"Vaibhav",
    age:100,
    email:"v@v.com"
}

let newUSer:User ={
    name:"Demo",
    age:34,
    email:"test@test.com",
    cardDetail:"4534534-34534-534"
}
myPerson.age = 24;
myPerson.name = "Test"

/***
------------ READONLY
 Now if the key is defined as Readonly nowhere in the code we will be able to update its value as you can see in L16
myPerson.name is giving an error
 */
/***
 ---------- Optional
you can see that at L7 we have made cardDetails as optional and it makes that if you pass or don't pass it will not give error
 */

/***
 ------- Combinig type in TS
 */

 type PersonName = {
    name:string
 }

 type PersonEmail = {
    email: string
 }

 type PersonDetails = PersonEmail & PersonName & {
    age:number;
 }


 //We can combile multiple type by & name make a combination or Hybrid type as in L47
export {}