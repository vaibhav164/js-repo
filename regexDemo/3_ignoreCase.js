/***
 * let see how to make the regex ingnore the case sensitiveness
 */

const stringDemo = 'Hey bro what are you doing i\' Vaibhav';

const regexExpression = /vaibhav|hey/i;
/***just by adding i flag in regex we can make the expression ingnore 
 * case sensitivity 
 * **/

console.log(regexExpression.test(stringDemo))
/****
 thus we learned that to ignore case sensitive ness in regex we use i flag
 */