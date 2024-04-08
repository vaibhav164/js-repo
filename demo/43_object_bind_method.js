// bind too works as same as call method 

/***
 * only difference is call directly calls the method but bind will return 
 * an function and to call that fnction we have to call the returned function
 */

/*** E.g., below___________________ */

const studentDetails = {
    name: 'Vikas',
    standard: 5,
    age: 23,
    school: 'TVS'
}

function printUserDetails(area, experties) {
    console.log(`${this.name} of ${this.standard}th standard
    of ${this.age} years of ${this.school} lives in ${area} is a very good ${experties}`);
}

// printUserDetails.bind(studentDetails, 'Boisar', 'Musician')

/***
 as you can se L22 will not have any output as bind method returns a 
 function to call that return function you have to use it as below
 ***/

const studentDisplay = printUserDetails.bind(studentDetails, 'Boisar', 'singer');

studentDisplay();