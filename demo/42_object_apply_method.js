/***
 * lets learn apply method of JS
 */

const phone1 = {
    name: "redme 11",
    brand: 'Readme',
    battery: 300
}

function displayPhoneDetails(color, price) {
    console.log(`This phone is ${this.name} of ${this.brand} 
                 has battery of ${this.battery}mAh of ${color} color of ${price}rs`);
}


displayPhoneDetails.apply(phone1, ['red', 11000])

//so apply and call works as same infact from inside apply too use call 
//only difference is that parameter passed for function is passed in array