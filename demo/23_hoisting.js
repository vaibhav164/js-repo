//hoisting

normalfunction();

function normalfunction() {
    console.log('normal function log');
}

/**
 here in above function is a normal function it can be called before declaration
 *
 */
arraowFunction();


/**
 * 
 but the arrow function throws error as arraowFunction cannot be used before 
 declaration this is known as hoisting
 * 
 * 
 */

const arraowFunction = () => {
    console.log('log for arrow function =>*************')
}