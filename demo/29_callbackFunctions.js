//callback functions
function fun1(a) {
    a();
    console.log('Inside fun 1')
}

function fun2() {
    console.log('Inside fun 2');
}

fun1(fun2)

//callback function is a function which is being passed as parameter to 
//another function