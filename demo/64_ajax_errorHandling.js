// Let's see how to handle AJAX error handling for XMLHttpsRequest

const URL = 'https://jsonplaceholder.typicode.com/postsSSSSSSS'
const apiCall = new XMLHttpRequest();

apiCall.open("GET", URL);

apiCall.onLoad = ()=>{
  if(apiCall.status >=200 && apiCall.status < 300){
    const data = JSON.parse(apiCall.response);
    console.log(data)
  }else {
  console.log("Something went wrong")
}
}

apiCall.onerror = () =>{
  
}

apiCall.send();
