const user1 = {
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

/**
 so L17 is a function that creates Objects as we have discussed if their will be 
 multiple objects then their respect methods isAdult about will consume more memory
 to avoid this we can make an other object which only has those mothod and we 
 can pass the refference of that object key as below example
 */
const productMethods = {
    about() {
        return `The Phone is ${this.name} of ${this.brand} cost ${this.price}`
    },
    batterSpecification() {
        return `The battery size is ${this.battery}`
    }
}
const product = {
    type: 'Mobile',
    name: 'Readme Note pro',
    brand: 'Readme',
    price: 50000,
    battery: 5000,
    about: productMethods.about,
    batterSpecification: productMethods.batterSpecification
};

/*** As above we have did it to enhance it further 
     Lets say if we want to make multiple product using function as below
 */

const createProduct = (name, brand, price, battery) => {
    const product = {};
    product.name = name;
    product.brand = brand;
    product.price = price;
    product.battery = battery;
    product.about = productMethods.about;
    product.batterSpecification = productMethods.batterSpecification;

    return product;
}

const product1 = createProduct('Iphone', "Apple", 100000, 5000)
const product2 = createProduct('Samsung Galaxy', "Samsung", 100000, 5000)

console.log(product1.about());
console.log(product2.batterSpecification());

/***** so from above example we can see how to make a method referance used 
        for multiple usage
        still this code has some issue lets say we want that our product should
        has more function for that 1st i have to declare that method in Object 
        ProductMethods and after that we have to call it in createProduct function
        as well thus it still a tedious task we can improve this by using property
        proto or prototype
 */