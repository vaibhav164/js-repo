function log(){
    console.log(`${this.name} is ${this.age} year's old`)
}

const user1 ={
    name:'vaibhav',
    age:23,
}

const user2 ={
    name:"ansu",
    age:34
}

log.call(user2)
log.call(user1);

