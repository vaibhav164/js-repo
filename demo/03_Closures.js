/**this example is of closure which represents in simple that how a child function can access the variable of parent function 
 * **/ 

function outerSum(val1){
    return function innerSum(val2){
        return val1 + val2
    }
}

const result = outerSum(5);

//console.log(result) //[Function: innerSum]

//you can notice that above log will log the return fucntion if you want to log returned value then you have to call it and as 
//while calling the return function it take one additional parameter thus you need to pass an other parameter as below

//console.log(result(3));//O/P--->>>>> 8


function loadbalance (){
    let currentBalance = 20;


    function UpdateBalance(){
        let newValue = ++currentBalance
        return newValue
    }

    return {UpdateBalance};
};

const balanceValue = loadbalance();

//console.log(balanceValue())//this will throw error because it loadBalance will return an object which has a function;
console.log(balanceValue.UpdateBalance())
console.log(Object.values(balanceValue))// O/P--->>[ [Function: UpdateBalance] ] JFYI