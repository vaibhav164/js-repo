//In JS function can also be treated as object

 function hey() {
    console.log("Inside hey")
}
// hey.call();
// console.log(hey.name) 

hey.newProperty = 'demo bro of key property of function'

// console.log(hey.newProperty)

//here you can see that function can act as object and here is the above example
hey.prototype.value = function(){
    console.log("inside value prototype in hey function")
}
hey.prototype.terms = function(){
    console.log("inside trerms of prototype of hey")
}

hey.prototype.term2="prototype term2 key value"

console.log(hey.prototype.term2)
