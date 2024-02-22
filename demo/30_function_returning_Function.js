function func(){
    console.log("in Func")
};

function func1(val){
    console.log("Inside func1\n","now calling func");
    func();
}

function demoFunction(){
    console.log("inside Demo Function");
    return func1;
};

let returnofDemoFunction = demoFunction();
returnofDemoFunction();

/**
 in L12 we are returing an function func1 and thus the in L15 returnofDemoFunction
 becomes a function to call it we have to use this variable as function call as below
 returnofDemoFunction() 
 */