//find in array

const animal = ['elephant', 'horse', 'cat', 'dog', 'cow'];

const isLength3 =(string)=>{
        return string.length === 3;
}

const value = animal.find(isLength3);

// console.log(value)


const userList =[
    {userName: 'vaibhav', userId:5},
    {userName: 'vai', userId:3},
    {userName: 'vishal', userId:6},
    {userName: 'ajay', userId:1},
    {userName: 'rajjo', userId:7},
    {userName: 'arman', userId:8},
    {userName: 'tiwari', userId:2}
]

const userWithUserId6 = userList.find((user)=>user.userId === 6);

console.log(userWithUserId6);

//so the find function is used in array method to find a value in array which is 
//unique