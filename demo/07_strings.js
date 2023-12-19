//new way to delare a string 

const newStringDeclare = new String('Hellow bro');
const newString= "New String";

console.log(newString[2]);
console.log(newStringDeclare);
console.log(newString.__proto__);
console.log(newStringDeclare.toUpperCase());
console.log(newStringDeclare.indexOf('o'));

//includes
//it checks gthe wheather the string contails passed value in includes
const demoString = "vaibhavValue";
console.log(demoString.includes('vaibhav'));

//charAt
//this checks the value at specific index
console.log(demoString.charAt(4))

//concat
//this will concat the parent string with all passed parameters
console.log(demoString.concat(".  ","new value", "   ", "Hellow"));


// indexOf

//this gives index of character passed in functions

console.log(demoString.indexOf("V"));

//slice

//this will slice the string into specific index
// slice can handle negative values as well when passed in parameters 
console.log(demoString.slice(-8));

//substring
//it is same as slice only difference is in handling of negative indexes and fixed value grater than second index
//in below log we get "hav" but in slice it will be an empty string 
console.log(demoString.substring(7,4));


//toUpperCase

//this will convert the complete string to uppercase and similarly toLowerCase will convert complete string to lowerCase

//trim
//this will remove unnecessary space from starting and end of string o/p => "Hellloow.   workd."
const trimeString="      Hellloow.   workd.    "
console.log(trimeString.trim());

//split 
//this will split the given string in several substings as per required conditon;
const str = "I can walk in english i can talk in English because is a very funny language";
const splitWord = str.split(' ');
console.log(splitWord[6]);
// the output will be as "can"

//padStart 

//this will update a string with a character passed wit the respective positions

const str1 = 'ld';
// O/P "00000000ld"
console.log(str1.padStart(10, '0'));


//padEnd

//it will work same as padStart but at end on string


//repeat

const heyString = "Yaa Hoo";
console.log(`Hey  ${heyString.repeat(5)}`);
//this will repeat the parent string for number of time passed in repeat function
// O/p => Hey  Yaa HooYaa HooYaa HooYaa HooYaa Hoo


//replace *********************************
//this will replace the given string substrings with passed respective substring
const replaceUrl="https://improved-barnacle-g6rvxggq6q5hwjj5.github.dev";
console.log(replaceUrl.replaceAll('-', '%20'));
//the above first - will be relaced with %20 O/P=> https://improved%20barnacle-g6rvxggq6q5hwjj5.github.dev

//to replace all - with %20 use function replaceAll


