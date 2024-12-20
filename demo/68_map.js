//this is how we use map it stores keyvalue pairs and its typeof is object

let users = new Map([
['me','vaibhav']
['f1','vishal']
['f2','nitin']
['f3','tarun']
['f4','arman']
]);

console.log(users);

//if we run for of loop in Map it will give at eact iteration as [key, value] array as below;

for(user of users){
console.log(user)
}

