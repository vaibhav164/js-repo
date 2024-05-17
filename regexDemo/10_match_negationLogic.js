/***
 * Lets see how to make an expression which will match everything except
 * a specific terms below is a exmaple
 */

const stringDemo = 'well value of pi in faction is 22/7 but its \
                    decimal value till 10th decimal place is  \
                    3.1415926535'

const regexForNegation = /[^0-9aeiou]/ig
/***
 * the above L10 regex will match every thing accept numbers and vowels
 * aeiou
 */
console.log(stringDemo.match(regexForNegation))

/***thus below is the output
 * [
  'w', 'l', 'l', ' ', 'v', 'l', ' ', 'f', ' ', 'p', ' ',
  'n', ' ', 'f', 'c', 't', 'n', ' ', 's', ' ', '/', ' ',
  'b', 't', ' ', 't', 's', ' ', ' ', ' ', ' ', ' ', ' ',
  ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',
  ' ', ' ', ' ', ' ', 'd', 'c', 'm', 'l', ' ', 'v', 'l',
  ' ', 't', 'l', 'l', ' ', 't', 'h', ' ', 'd', 'c', 'm',
  'l', ' ', 'p', 'l', 'c', ' ', 's', ' ', ' ', ' ', ' ',
  ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',
  ' ', ' ', ' ', ' ', ' ', ' ', ' ', '.'
]
 */