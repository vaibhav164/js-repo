/* 
Arrow function are alomost smae as normal function infact these ara further 
extenssion of function expresstion synstx for it is as below

**/

const arrowfunctionDemo = () => {
  console.log("functionncalled");
}

/**
 if the arraow function has single paramer we can skip the round brakcet{()}
 e.g.,
 */

const functionWithOutParenthisis = value => {
  console.log("log of vlaue is", value);
};

//  functionWithOutParenthisis(4);

/**
 L16 is demo for it 

 Now of the function logic is of lets then one line and can be returned in single
 line then we can remove the retrun as well e.g.,

 const sum=(val1,val2)=>{
   return val1+val2;
 }

 this can be done as below
 */

const sum = (val1, val2) => val1 + val2;
console.log(sum(3, 5)); //8
