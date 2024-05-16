const strDemo = 'Luka chippi bohot hui samne aaja na kaha kaha dhundhe \
                 tujhe thak gayi hai ab teri ma';

let regexExpression = /thak/

const matchResult = strDemo.match(regexExpression);
const testResult = regexExpression.test(strDemo)
console.log(testResult)

/******
 the above is example of regex expression which has expression for thak 
 string thus if we'll test that wheather the give string has the regex
 value we'll get respective result as in L7

 */