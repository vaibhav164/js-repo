//Match single character with multiple possibilities

const strList = 'Hey bro why are you still here why dont you try pots';

const regexDemoNew = /po[tgo]s/;

/***
 * thus the above will ceck for the letter that start with po ends with s 
 * and in between po and s there is another single letter which may can be
 * t,g or o so the total length is 4 of the stubstring in given string   
 */

console.log(strList.match(regexDemoNew));
/***
 * O/P
[
  'pots',
  index: 48,
  input: 'Hey bro why are you still here why dont you try pots',
  groups: undefined
]
 */