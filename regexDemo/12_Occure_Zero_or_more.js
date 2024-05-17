/***
 * Lets learn to check the character is occuring zero or more time
 */

const str1 = 'zoooooooooooooooooom';
const str2 = 'zipzipzuppieee';

const regexForZeroOrMore = /zo*/ig;

console.log(str1.match(regexForZeroOrMore));
//O/P----->>>> [ 'zoooooooooooooooooo' ]
console.log(str2.match(regexForZeroOrMore))
//O/P------>>> [ 'z', 'z', 'z' ]