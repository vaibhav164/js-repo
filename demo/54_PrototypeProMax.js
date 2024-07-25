let number = [34,5,34,6,2,5,2,4];

/***
 the above array at JS end is under the hood made below way
 */

 let arrayConstDemo = new Array(1,3,4,6,3,6,3,2);
Array.prototype.MyCustomFunction=function(){
    console.log("My cunstom Function in Array of JS")
    console.log("Programin in awesome!!!!!!!!!")
}
 console.log(Array.prototype)
 //O/P->Object(0) [ MyCustomFunction: [Function (anonymous)] ]

 console.log(Array.prototype.MyCustomFunction)
 //O/P->[Function (anonymous)]

 console.log(Array.prototype.MyCustomFunction())
 /*
 O/P->My cunstom Function in Array of JS
        Programin in awesome!!!!!!!!! 😍😍😍😍😍😍😍😍😍😍
 */