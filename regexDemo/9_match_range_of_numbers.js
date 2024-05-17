//Lets see to match range of number;

const stringNumberSample = 'well value of pi in faction is 22/7 but its \
                            decimal value till 10th decimal place is  \
                            3.1415926535'
const regexNumberRangeMatch = /[3-8]/g

/**
 * the above regex will look for the mathc of numbers from 3 to 8
 */

// console.log(stringNumberSample.match(regexNumberRangeMatch));
/****
 * O/P===>>>>
 * [
  '7', '3', '4',
  '5', '6', '5',
  '3', '5'
] __________%%%%%%%% Note if we not pass g or global flag it will only
match for 1st number or passed entity in regex e.g., if i didn't passed
g tag my output will be this as below
[
  '7',
  index: 34,
  input: 'well value of pi in faction is 22/7 but its                             decimal value till 10th decimal place is                              3.1415926535',
  groups: undefined
]
as the above string has number 7 first occured 
 */

/******%%%%%%%%%%%%%%%%%% CHECK NUMBER AND TEXT RANGE TOGETHER */

const regexNumberTextRange = /[5-9h-n]/ig;

console.log(stringNumberSample.match(regexNumberTextRange))

/****AS YOU CAN SEE THE OUTPUT BELOW---->>>>>
 * [
  'l', 'l', 'l', 'i', 'i', 'n',
  'i', 'n', 'i', '7', 'i', 'i',
  'm', 'l', 'l', 'i', 'l', 'l',
  'h', 'i', 'm', 'l', 'l', 'i',
  '5', '9', '6', '5', '5'
]
 */