const Object1 ={
    key1:'value1',
    key2:'value2'
}
const Object2={
    key3:'value3',
    key4:'value4'
}
/************* spread operator can only be used on interable element like string
    not on numbers   
 */
const newObject={...Object1, newKey:'*****',...Object2}
const otherObj={...'abcdefghijklmnopqrstuvwxyz'}
// console.log(newObject['newKey']);

//Udaating Object in an Object Using spread Operator 
const userDetails={
    name:'vaibhav',
    age:27, 
    DOb:'16/04/1996',
    school:"Boisar Milaty School",
    Addredd:{
        area:'tirvedi-nagar',
        state:'Maharashtra',
        country:'India',
        pin:401501
    }
};
//  we can do this normaly as done below 
// userDetails.Addredd.pin= 122022;
// console.log(userDetails);

/**
    Now lets do it using spread Operator
**/

const updatedUserDetail={...userDetails,Addredd:{
    ...userDetails.Addredd,pin:222222
}}

// console.log(updatedUserDetail);
/**just by adding spred operator in Strnig we can spread each element of
 string in object or array of string**/
const spredStringObject={..."SKDHASDHASLDLASJDLASJDLJASLDJASLJD"};

// console.log(spredStringObject);
console.log(spredStringObject[20]);
