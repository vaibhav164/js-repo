function hello(callback){
    console.log("Inside function hello");
    callback();
};

hello(()=>{
    console.log('inside callback function')
});