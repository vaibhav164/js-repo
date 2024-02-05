/**
 Lets check and make a keys in object pf same time for more than one times
 */
const userDetail={
    name:'vaibhav',
    age:32,
    name:'Vipul'
}
/**
console.log(userDetail); //{ name: 'Vipul', age: 32 }
in above case the object will have the fresh value of key which is repeated 
 */

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

const userDetails2={
    name:'demo2',
    age:22,
    Dob:"12/2/1234",
    school:null
}

const mergedData={...userDetails2, Address:{...userDetails.Addredd}};
// console.log(Object.keys(mergedData.Address));


const newObject={...userDetails2,...userDetails};
/*so in newObject the keys which are common in both the objects 
i.e., in ths above case name,age, school will be over ridden from the key of last
spreaded value 
**/
console.log(newObject);