//Linking of Object key with other object key

const obj1 = {
    key1:'Value1',
    key2:'Value2'
}

const obj2 = Object.create(obj1)

console.log(obj2.__proto__)

//__proto__ is aslo called as dunder