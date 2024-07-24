const obj ={
    name:"vaibhav",
    age:45,
    about:function(){
        this.logValue()
        // console.log(`User name is ${this.name} and age is ${this.age}`)
    },
    logValue:function(){
        console.log(this)
    }
}
obj.about();

/******** In JS at browser console the value of this and window object are same i.e.,
 
console.log(this);
console.log(window);
_____ both will give same output as browser or JS ingine global object
 */