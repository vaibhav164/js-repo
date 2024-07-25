function CreateUser(Name, age, address, pin){
    this.FullName=Name;
    this.age=age;
    this.address=address;
    this.pin=pin;
}

CreateUser.prototype.demoProtoType="Hey bro demo";
CreateUser.prototype.UserInfo=function(){
    return `${this.FullName} is ${this.age} years old`
};
CreateUser.prototype.getUserAddress=function(){
    return `${this.FullName} live at ${this.address} ZIP code ${this.pin}`
}

const User1=new CreateUser("Vaibnhav Singh",23, "Boisar", 401501)
const secondUser=new CreateUser("Ansu Singh",54,"Udaipur", 313004)

console.log(User1.UserInfo)
/*this will return [Function (anonymous)] as its a function to get 
value just calk it bro
*/
console.log(User1.getUserAddress())
//O/P-   Vaibnhav Singh live at Boisar ZIP code 401501