// value passed in fuctions is called are argument 
//e.g., in L11 the value 5 and 7 are arguments of sumTwoNumber function

/*value which is recived in function while declaring a function is called are 
  parameters so in L7 num1 and num2 are paramter of sumTwoNumber
*/
function sumTwoNumber(num1, num2) {
    return num1 + num2;
}

sumTwoNumber(5, 7);

/**
 undefiend + undefined = NaN
 or any number summed with undefined is NaN 
 e.g., 3+4+undefined=NaN
 */


function firstCharacter(value) {
    return value[0];
};

//  console.log("fist value of Vaibhav is:",firstCharacter('Vaibhav'));

function isPresent(arrayValue, data) {
    for (value of arrayValue) {
        // console.log(value)
        if (data == value)
            return arrayValue.indexOf(value);
    }
    return -1
};

console.log(isPresent([3, 5, 4, 3, 2, 6, 4], 0));

