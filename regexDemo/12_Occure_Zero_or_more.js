/***
 * Lets learn to check the character is occuring zero or more time
 */

const str1 = 'zoooooooooooooooooom';
const str2 = 'zipzipzuppieee';
const str3 = 'ooooooh_Bro'

const regexForZeroOrMore = /zo*/ig;

console.log(str1.match(regexForZeroOrMore));
//O/P----->>>> [ 'zoooooooooooooooooo' ]
console.log(str2.match(regexForZeroOrMore))
//O/P------>>> [ 'z', 'z', 'z' ]
console.log(str3.match(regexForZeroOrMore))
//O/P---->>null