let stringDemo = "Johny johny yes papa";
let stringDemo2 = 'TeddyBear teddybear come around';

const regexExpreesion = /jny/ig
/**
 * we can se in above regex we have i flag and g flag thus we can use 
 * multiple flag in same regex as above thus g flag is use to check the 
 * entire string if we not add g or global flag we get only first time
 * true or false condition
 */

console.log(stringDemo.match(regexExpreesion));
//O/P => [ 'Johny', 'johny' ]
/**
 * as it has i flag also it ignores case sensitivity
 * and if the conditions does not satisfies it give null as O/P
 */
