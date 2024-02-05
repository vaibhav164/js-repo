/** 
 let and const are block socpe
 and var is a function scope
*/

{
    var name = 'vaibhav';
    console.log(name);

}

{
    console.log(name);
    var name = 'ansu';
    console.log(name);
}