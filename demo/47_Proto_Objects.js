const user = {
    fitstName: 'vaibhabv',
    lastname: 'singhum',
    age: 34,
    email: 'caobnsdjn@slkdjkf.com',
    contact: 34980343,
    address: 'locality pincode district state country',
    diplayName() {
        return `Full name is  ${this.fitstName} ${this.lastname}`
    },
    isAdult() {
        return this.age >= 18
    }
}

/****
 as we can see that above is an Object 

now lets create a function which takes parameters as same key values on user
but returns an complete object as above
 */

const usergenerator = (firstName, lastname, age, email, contact, address) => {
    const user = {};

    user.firstName = firstName;
    user.lastname = lastname;
    user.age = age;
    user.email = email;
    user.contact = contact;
    user.address = address;
    user.about = function () {
        return `Full name is  ${this.firstName} ${this.lastname}`
    }
    user.isAdult = function () {
        return this.age >= 18
    }
    return user;
}

const user2 = usergenerator('Vipul', 'singh', 23, 'vipul@gmail.com', 2342223, "vipul's Address");


console.log(user2.isAdult())


/***
 from L23 we have a function to create Objects but if me have to make 
 multiple objects in that as we have two methods in object as isAdult and about
 thus if we create let say a million object then we'll have a million methods 
 with same obutput and logic in it thus it will consume unnecessarly more
 memory thus how to avoid it lts learn about it in other part
 */
