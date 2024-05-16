let strDemo = 'let demomstrate extract word Vaibhav from this string';

const regexExpression = /Vaibhav/;

console.log(strDemo.match(regexExpression));


/***
 * thus to get an value from a string using regex expression we can use map
 * as the output of L5 is as below
 * [
    'Vaibhav',
    index: 29,
    input: 'let demomstrate extract word Vaibhav from this string',
    groups: undefined
   ]

   and to get that matching text we can just do this as below
   strDemo.match(regexExpression)[0] 
 */