//Lets see how to match range of letters using regex

const stringDemo = 'Luka chippi bohot hui samne aaja na kaha kaha dhundhe \
tujhe thak gayi hai ab teri ma';

const regexRangeOfLetter = /[a-z]/ig;

/***
 * the above L6 will check all range of letters from a to z and it will
 * ignore the case sensitiveness because of i flag and will search for whole
 * string becasue of g flag
 */

console.log(stringDemo.match(regexRangeOfLetter))
/***
 * O/P--->>>[
  'L', 'u', 'k', 'a', 'c', 'h', 'i', 'p', 'p',
  'i', 'b', 'o', 'h', 'o', 't', 'h', 'u', 'i',
  's', 'a', 'm', 'n', 'e', 'a', 'a', 'j', 'a',
  'n', 'a', 'k', 'a', 'h', 'a', 'k', 'a', 'h',
  'a', 'd', 'h', 'u', 'n', 'd', 'h', 'e', 't',
  'u', 'j', 'h', 'e', 't', 'h', 'a', 'k', 'g',
  'a', 'y', 'i', 'h', 'a', 'i', 'a', 'b', 't',
  'e', 'r', 'i', 'm', 'a'
]
 */