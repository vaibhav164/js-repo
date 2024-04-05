//rest Opertator


const restfunction = (val1, val2, ...val3) => {
    console.log("val1 is", val1);
    console.log("val2 is", val2);
    console.log("val2 is", val3);
}

// restfunction(3,4,56,2,4,7,5,4,3);

/**
 in above L4 the ...val3 makes the rrest value in L10 for restfunction in Array
 thus is O/P is as
    val1 is 3
    val2 is 4
    val2 is [
    56, 2, 4, 7,
    5, 4, 3
    ]
 */


const summAllNumbers = (...values) => {
    let total = 0;
    for (val of values) {
        total = total + val;
    }
    return total;
}

console.log(summAllNumbers(3, 4, 3, 2, 4, 6, 8, 9, 7, 5, 4));