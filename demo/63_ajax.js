/**
AJAX : asyncronous Javascript and XML

HTTP request is a set of web application texhniques using many web technologies on the client side to create asynchronous web app

with AJAX web apps can send and retrive data from server asynchronously(in the background) without interfering with display and behaviour of the
existing page


We have 3 most common ways to create and send request to server
1. xmlHttpRequest (old way of doing)
2. fetch (new way of doing introduced in ES6)
3. axios (3rd party library)
*/
const URL = 'https://jsonplaceholder.typicode.com/posts'
const xhr = new XMLHttpRequest();
console.log(xhr); //this will be an object with keys relevent to api's

//This is how we configure our xhr request

xhr.open("GET", URL)

xhr.onreadystatechange = function(){
  console.log(xhr)
}
//xhr.onLoad will only run when xhr readyState will be 4 i.e., when operation is done 
xhr.onLoad = function(){
  console.log(xhr.response)
}
xhr.send();

/*
XMLHttpRequest readyState are 4 values
0	UNSENT	Client has been created. open() not called yet.
1	OPENED	open() has been called.
2	HEADERS_RECEIVED	send() has been called, and headers and status are available.
3	LOADING	Downloading; responseText holds partial data.
4	DONE	The operation is complete.
and L23 functoin will be called everytime the readyState is being changed

*/
/**
JSON is almost similar to JS object  some differences are as in JS the object keys are not kept in "" string format but in JSON is put in ""
string format as "userName", "age" but this hot happens in JS
**/

