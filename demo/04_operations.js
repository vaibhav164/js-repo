//*************************************OPERATIONS*/

let value = 5;
let negValue = -value;

// console.log(negValue);
// 5 => negValur -5;
/* 
console.log(2+2);   //2+2=>4
console.log(2-2);   //=>0
console.log(2/2);   //=>1
console.log(2*2);   //=>4
console.log(2**3);  //=>8
console.log(5%3);   //=>2
*/


let str1 = "hello";
let str2 = " vaibhav";

let str3 = str1 + str2;
// console.log(str3);  //=> hello vaibhav


/*
console.log("1" + 4);//=>14
console.log(1 + "5");//=>15
console.log("2"+"3");//=>23
console.log(3+4+"5");//=>75
console.log("3"+5+6);//=>356
console.log("3"+(5+6));//=>311

*/

//some trickey conersions--------/////------

// console.log(+true);//=> 1
// console.log(+"");//=> 0

let gameCounter = 100;
// gameCounter++
// console.log(gameCounter);//=>101

// console.log(gameCounter++);//=>100

// console.log(1+2+4+"4"+3+2);


let x2 = 3n;
const y2 = x2++;

console.table([x2, y2]);