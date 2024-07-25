function createUser(firstName, Lastname, age,email){
    this.firstName = firstName
    this.Lastname= Lastname;
    this.age = age
    this.email = email
}

createUser.prototype.userInfo = function(){
    return `${this.firstName} ${this.Lastname} ${this.age} ${this.email}`
}

createUser.prototype.sing= function(){
    return `lalal alala la ala `;
}
const User1= new createUser("Vaibhav", "singh", 234, 'vai1641996@gmail.com')
console.log(User1.userInfo())