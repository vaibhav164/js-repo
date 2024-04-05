let age = 33;
let counter = '56asdas'
// console.log(typeof age);
// console.log(typeof(age));
// console.log(typeof(counter));
let value = Number(counter);

// console.table([typeof value, value]);
// console.log(typeof NaN);

// NaN is an interesting point to be noticed here it indicates that value in not a number but its typeof is a Number
// "33" => 33
// "33asd" => NaN
// null => 0
// undefined => NaN
// true => 1 and respectively false will be as => 0 
// any other string when converted to number if its value is not pure number then its conversion will be as NaN 
//e.g., "vaibhav" => NaN and "34" => obiously!!!! gives 34



/*output of above code is as 
number
number
string
┌─────────┬──────────┐
│ (index) │  Values  │
├─────────┼──────────┤
│    0    │ 'number' │
│    1    │   NaN    │
└─────────┴──────────┘
number
*/



let isPresent = 1;

let booleanIsPresent = Boolean(isPresent);

// console.log(booleanIsPresent);
// 1=> true, 0=>false
// ""=> false and anything present in between string will return true e.g., "sdfjkjsdf"=> true



let rendomNumber = 45;
let stringRandomNumber = String(45);

console.table([stringRandomNumber, typeof (stringRandomNumber)]);