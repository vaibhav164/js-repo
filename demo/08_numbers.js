const marks = 400

// new way to define a number is as below

const score = new Number(30.345345345);
console.log(marks);
console.log(score);

console.log(score.toString());

//tofixed method
// this will let us get the value of number precised till the decimal point passed in method
console.log(score.toFixed(2));

//e.g it value of score is 30.345345345 then its tofixed value will be 30.35