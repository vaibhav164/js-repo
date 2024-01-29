const names=['ajay','arman', 'vishal', 'vivek','tarun'];

for(name1 of names){
        console.log(name1);
}

//here name1 is a value of specific index of names array as per its instance

for(name2 in names){
        console.log(name2)
}

//here in for in loop the name2 will give the index of each element and this loop will iterate till the length of array