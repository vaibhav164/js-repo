const marks = 400

// new way to define a number is as below

const score = new Number(30.345345345);
console.log(marks);
console.log(score);

console.log(score.toString());

//tofixed method
// this will let us get the value of number precised till the decimal point passed in method
// console.log(score.toFixed(2));

//e.g it value of score is 30.345345345 then its tofixed value will be 30.35

//toPrecision method
//this will work for the condtion to make a number precised
// this is used to get a precised value upto a point which is passed and it returns a string
console.log(score.toPrecision(3));


//toLocaleString method

//this will convert a bu==number into a more readable form e.g,  1000000 will became. 1,000,000 

const demoNumber = 3453453454645;
console.log(demoNumber.toLocaleString('en-IN'));

// if number is demoNumber Value then if console.log(demoNumber.toLocaleString())) => it O/p will be as 3,453,453,454,645
// and if same is of this log console.log(demoNumber.toLocaleString('en-IN')); tis value will became as per indian standard 34,53,45,34,54,645

// Number.MAX_SAFE_INTEGER and Number.MIN_SAFE_INTEGER
//this will give max or min number that can be used in JS using number
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);


