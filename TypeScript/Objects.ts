//Demo of Object in TS

function movie():{}{
    return {}
}
//Here above movie should have a return type of object

function movieDetail():{name:string,isReleased:boolean,collection:number}{

    return {name:"Suryavansham",isReleased:true, collection:400}
//Here this is how we can define the return type as Object in fucntion
}

const value ={namePerson:'Ajay', time:7,persons:1, color:"violet"};
function taskList({namePerson:string, time:number, persons:number}){

}

taskList(value)

/***
 * Here in above L15 you can see the the argumnet type in tasklist is not same as the parameter list passed in L19 but TS
 * still not giving error
 */