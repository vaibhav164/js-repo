//Let see how to change Proto type of something

function hello (){
    console.log("Demo bro")
}

hello.prototype=[]

let demo ={};

demo.prototype=56

console.log(hello.prototype, demo.prototype)