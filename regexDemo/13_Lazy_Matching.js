/*****
 * By default regex does a mathcing in greedy match it means that if it 
 * matches the max value covered
 */
const strng1 = 'Hellllllllllloooooooooooobro';
const regexDefault = /lo/g

console.log(strng1.match(regexDefault))