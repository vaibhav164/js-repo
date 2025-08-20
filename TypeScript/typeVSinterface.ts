//we know that the type and interface looks similar e.g.,


type user ={
    name:string;
    contact:string;
    gender:string;
}

interface person {
    name:string;
    contact:string;
    gender:string;
}
/****
 * the look same and serve also the same purpose but there are some difference in them e.g., below
 */
//Extending or inheritance
interface Admin extends person {
    role:'admin'|'ta'|'pm'
}
//same in type can be done using & operator


type human = user & {
    age:number
}

//Adding new field in interface is possible but if we want to add new file we can only update the original type we can't 
//redeclare it e.g.,

interface person {
    nationality:string
}

//above L32 will extend the value of person from L10 and add one more value to person but we can't achieve this same in type
//it will give us error

export {}