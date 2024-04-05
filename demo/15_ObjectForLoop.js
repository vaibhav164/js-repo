const product = {
  name: "parleG",
  quantity: 4,
  category: 'snack',
  taste: 'sweet',
  batchDetails: {
    expiryDate: '23-12-24',
    manifacturingData: '45'
  }
}
//this will give name of keys
for (value in product) { }
// for(value in product) console.log(value);

//this will give vales of key
for (value in product) { }
// for(value in product) console.log(product[value]);

//this will give set of values but complete set in string format
for (value in product) { }
// for(value in product) console.log(`${value}:${product[value]}`)
/**
 Object.keys method return the array which hase keys as strings
 */

Object.keys(product);

//  console.log(Object.keys(product));

/** 
 geting object usinf for of loop 
*/
//this way we can get values of product keys using for of loops
for (value of Object.keys(product)) {
  // console.log(product[value]);
};


// consputing value of Objects

const val1 = 'FirstKey';
const val2 = 'SecondKey';

const keyValue = 'firstValue';
const keyValue2 = 'secondValue';

const Obj = {
  [val1]: keyValue,
  [val2]: keyValue2
}

console.log(Obj);