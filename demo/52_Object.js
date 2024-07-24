function UserDetail(height, weight){
    console.log(`${this.name} is ${this.age} years old , height is ${height} and weight is ${weight} `)
}

const user1 ={
    name:"Vaibhav",
    age:34
};

const logUserDetails = UserDetail.bind(user1, 45,12);

logUserDetails();