/**
 default parameter
 */

 /**
  let say we have function which has 2 parameter and while calling it only one 
  argument is passed in that case we can set a default value to paramter
  e.g., below
  */

  const sumFunction=(val1, val2)=>{
    return val1+val2;
  }
//   console.log(sumFunction(4,6));

  /**
   in ablove L14 if any of ther arguments will not be pased we'll get in return
   as NaN

   to avoid this we can add default parameter if value is undefined it will use 
   its default value and e;se it will use the passed value e.g., below 
   */


   const multiply=(num1=1,num2=1)=> num1*num2; 

   /**
    so in above L25 if num1 or num2 any value is missing its default value will be 1
    else we can use its value as passed;
    */
   console.log(multiply(undefined,4));