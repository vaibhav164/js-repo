/**** lets address some points in arrow function  */

const product = {
    type: 'Mobile',
    name: "Redme 11 Pro",
    brand: 'Redme',
    battrey: 5000,
    displayDetailsarrow: () => {
        console.log("_________", this);
        console.log(`Type: ${this.name}\n Name: ${this.name} \n
                     Brand: ${this.brand}\n Battery: ${this.battrey}`)
    },
    displayDetailsfucntion: function () {
        console.log(`Type: ${this.name}\n Name: ${this.name}\n
                     Brand: ${this.brand}\n Battery: ${this.battrey}`)
    }

};

// product.displayDetailsarrow();
// product.displayDetailsfucntion();
/** Now L19 will have this instance as undefined as it will always
    takes this from object outside instance e.g this in arrow will be 
    value of this outside of the product object which is in this case {}

    thus in general we can say that use of this in arrow function scope
    is not usefull 
  */


/********_______Note______*/

/***
 we cant use call apply or bind in arrow fucntion scope it will not work
 */
