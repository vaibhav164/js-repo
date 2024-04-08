const user = {
    fitstName: 'vaibhabv',
    lastname: 'singhum',
    age: 34,
    email: 'caobnsdjn@slkdjkf.com',
    contact: 34980343,
    address: 'locality pincode district state country',
    diplayName() {
        return console.log(`Full name is  ${this.fitstName} ${this.lastname}`)
    },
    isAdult() {
        return this.age > 18
    }
}