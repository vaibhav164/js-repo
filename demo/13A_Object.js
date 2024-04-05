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
product['batchDetails']['manifacturingData'] = '23-12-23';

// console.log(product);
//difference between array notation and dot notation

/*
If we want the to add a key with spaces we cant do it usinf dot we can only do it 
using array notation e.g., product['owner name'] = 'parle' is valid but here dot 
will not work

And similarly we cant access the key with name space in name using dot notiation

**/

//product.product name='parle'
product['product name'] = 'parle';
const newKey = 'companyName';
product.newKey = 'Parle';

product[newKey] = 'Parle'
// console.log(product);
/**
here below if we have predefined key we cant assigne it key value in objects
so L28 will add key of name newKey to product but L30 will add companyName as
value of newKey from L27
 */

console.log(product);

/**
 so O/p of L38 will be this
 {
  name: 'parleG',
  quantity: 4,
  category: 'snack',
  taste: 'sweet',
  batchDetails: { expiryDate: '23-12-24', manifacturingData: '23-12-23' },
  'product name': 'parle',
  newKey: 'Parle',
  companyName: 'Parle'
}
 */




