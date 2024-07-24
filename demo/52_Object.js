const user1 ={
    name:'vaibhav',
    age:23,
    log:function(){
        console.log(`${this.name} is ${this.age} year's old`)
    }
}

const user2 ={
    name:"ansu",
    age:34
}

user1.log.call(user2)