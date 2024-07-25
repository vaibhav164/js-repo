class User{
    constructor(name, type){
        this.name=name
        this.type=type
    }

    getUserName(){
        return `${this.name} is of ${this.type} type`
    };
    get randomFunction(){
        return `this is a random class`
    }
    static get vaibhavFunction(){
        return `this is my first static method of class User`
    }
    static staticFunction2(){
        return "this is pure static function"
    }
    static firstStaticProperty='First Static Property'
}

const Guy1=new User("Static Demo", "normal");

console.log(Guy1.getUserName());
console.log(Guy1.randomFunction)
console.log(User.vaibhavFunction)
console.log(User.staticFunction2())
console.log(User.firstStaticProperty)

/*******So here we can say that static methods\Property are those 
 * methods\Property that can only be called by Class itself no class
 * instance can call it
 */