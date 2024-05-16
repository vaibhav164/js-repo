/**
 Lets see how to check or condition in regex expression
 */

 let demoString = 'Hey bro how are you there im in chennai\
                    mumbai  udaipur gurgaon varanasi jaunpur kanpur \
                    India'
// const regexExpression = /mumbai|delhi|india|udaipur/
const regexExpression1 = /sri Lanka|UAE|Boston/

let testResult = regexExpression1.test(demoString);

console.log(testResult)

/****
 now we can see that we can implement or using this '|' and of any 
 of the condition matches the string it will give true else false
 */