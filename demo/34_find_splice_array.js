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

// console.log(userWithUserId6);

//so the find function is used in array method to find a value in array which is 
//unique

/* EVERY METHOD */
const numbers = [4,6,8,0,2,44];

const is_array_even = numbers.every((num)=>num%2 === 0);

// console.log(is_array_even)


const applicantList =[
    {name:'vaibhav', age:19, gender:'M'},
    {name:'vai', age:43, gender:'M'},
    {name:'vav', age:45, gender:'M'},
    {name:'bhav', age:20, gender:'M'},
    {name:'ved', age:19, gender:'M'},
    {name:'vinod', age:40, gender:'M'},
    {name:'vinay', age:22, gender:'M'},
    {name:'vipin', age:25, gender:'M'},
];

const are_applicants_adult = applicantList.every((value)=>value.age>=18) 

console.log(are_applicants_adult)


//so above is an example of every method of array it takes an call back function
//return only tru of all condition in callback for each element in array is true
//else false