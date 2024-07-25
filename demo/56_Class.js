class Person{
    constructor(name,age,hobby,gender){
        this.name=name;
        this.gender=gender
        this.age=age
        this.hobby= hobby
    }

    userInfo(){
        console.log(`${this.name} is ${this.age} years old`)
    }
    getGender(){
        console.log(`${this.name} is a ${this.gender}`)
    }
}

class Dancer extends Person{
    constructor(name,age,gender,contact, hobby){
        super(name,age,gender,hobby);
        this.contactNumber= contact
    }
    getContactNumber(){
        return this.contactNumber
    }
}


const Person1 = new Dancer("Vishal",12,"M",983432,"singing");

Person1.userInfo();
//O/P->Vishal is 12 years old
console.log(Person1.getContactNumber())
//O/p->983432