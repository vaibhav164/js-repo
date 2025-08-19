/****
 * 
 * By this below way we can define that what will be the type of return of the function
 */

function vaibhav():number{
    const five = 5;

    return five
}

const ansu =():number=>{
    const six = 6
    return six
}
//In Above fuction if we'll return anything except a number the TS will throw error

/**** Function Returing void or not returing anything */

const throwError =(errorMessage:string):void=>{
    console.log(errorMessage)
    //Now if i return anything TS will throw error
}

const handleError =(err:string):never=>{
    throw new Error(err)
    /***now if i return somthing in this function or do something except throwing error TS will throw below error
     * 
     * -----A function returning 'never' cannot have a reachable end point.------
     * 
     * It means that function throws an exception or terminates the program
     * it appears where there is nothing left in union 
     * **/
}