//lets see how to match the occurance of a character for more than one times

const string = 'Moohenjoodaro';
const regexForJustGlobal = /o/g;
const regerForMoreThanOneTimeOccurance = /o+/g;

console.log(string.match(regerForMoreThanOneTimeOccurance));
//O/P->[ 'oo', 'oo', 'o' ]
console.log(string.match(regexForJustGlobal))
//O/P--->>>>[ 'o', 'o', 'o', 'o', 'o' ]