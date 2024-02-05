//lexical scope 
/**
 so this scope represents the scope of any variable in an functional range
 */

 let number=1;

 const fistFunction=()=>{
    // let number = 2;

    const secondNumber=()=>{
        // let number = 3;
        const thirdNumber=()=>{
            // let number = 4;
            console.log('thirdNumber____',number)
        }
        console.log('secondNumber______',number)
        thirdNumber();
    }
    console.log('firstNumber_______', number);
    secondNumber();
 };


 fistFunction();