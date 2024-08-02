//Temporal Dead Zone 

/***Till time the varaible is not initalized in code the variable is considered 
 * in TDZ 
 */
console.log(typeof undeifinedText)//undefined
console.log(typeof funnel);//ReferenceError: Cannot access 'funnel' before initialization
let funnel = 'demo'
console.log(typeof firm)//undefined
var firm = 'test';
