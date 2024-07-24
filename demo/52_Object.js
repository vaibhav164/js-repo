function details (hobby,time){
    console.log(`${this.name} is ${this.age} years old likes to play ${hobby} since ${time} years`)
}

const user1={
    name:"Vaibhav",
    age:45
}

const user2={
    name:"Ansi",
    age:67
}

details.call(user1,'guitar',4)
details.call(user2,'music',65)

details.apply(user1,['demo', 5])
details.apply(user2,['test',23])