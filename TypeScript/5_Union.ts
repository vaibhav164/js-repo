//Lets learn about uninon

type score = number | string;

type User ={
    name:string
    id:number
    scrore:score
}

type Admin = {
    name:string
    id:number
    l4:string
}

let Vaibhav:User|Admin = {name:"Vaibhav",id:3443,scrore:500}

//L17 is combiniation of ty0e User and Admin

function getTime(time:number|string){
    if(typeof time === 'number'){
            time.toLocaleString()
    }else if(typeof time === 'string'){
        let newTime = +time
    }
}


//Array 

let list:number[] = [343,32,23,12,54,32];
let newList:string[] =["dfgdfgdf",'dsfsdfsdf','dsfsdf','cxcxcxcx']

const mixList:(number|string|boolean)[] = ["Vainaubvs",324234234,false, true]

//Different type of type for Array are as above


/**** Constant Type in TS see below*/
let SpeedOfLight:300000 = 300000;
SpeedOfLight = 0;
//above you can see that we can't assign new value to SpeedOfLight

let trainSeat :"Lower"|"Middle"|'Upper'|'SideLower'|'SideUpper' ;
trainSeat = "Vaibhav"

//You can see that TS will throw error if i assign trainSeat another value except its defined type
export {}