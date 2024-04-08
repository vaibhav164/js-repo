'use strict'

function hello() {
    console.log(this);
};
hello()

/***
 * if we log this generaly we git global window object for that respective
 * JS engine this may create some time issue to avoid we use to add 
 * "use strict" at the top of code this will make sure that 'this' keyword
 * should not create confussion and ater that the log of 'this' will give
 * undefined value
 */