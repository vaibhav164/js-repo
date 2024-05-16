const strDemo = "Johny johny yes papa , my name is name of normal human";

const regexGlobalmatchSubstring = /jo./ig;
const regexSimpleMatchSubstring = /na./;

console.log(strDemo.match(regexSimpleMatchSubstring));
/***
 [
  'nam',
  index: 26,
  input: 'Johny johny yes papa , my name is name of normal human',
  groups: undefined
]

here we can see a simple . operator which is called as period operator
a srting followed that it will check for all string starts with above 
pre mentioned string and will ignore the orher part of substring
e.g., in L4 we see this expresion will search for substrign starts with
jo and will ignore other part as in string mentioned in L1 it will cathc
johny as it is starting from jo and if i had added global tag it will
had checked complete string 
 */

console.log(strDemo.match(regexGlobalmatchSubstring));

//O/P=> [ 'Joh', 'joh' ]