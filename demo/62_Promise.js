let data = ['photo','phonenumber', 'dob', 'fingerprint'];

const adhaarCard = new Promise((res, rej)=>{
    if(data.includes('photo') && data.includes('dob') && data.includes('phonenumber') && data.includes('fingerprint')){
        const Data = {
            'name':"Vaibhav Singh",
            'age':45,
            'gender':'Male',
            'adhaar_number':'2845 7011 4040',
            'message':'Congrations!!!!! your Adhaar in Progress'
        }
        res(Data)
    }else{
        rej("Try Again!!!!!")
    }
});

adhaarCard.then((data)=>{
    console.log(`${data.name} ${data.message}`)
}).catch((data)=>{
    console.log(data)
})

//Remember always that then() method always returns promise example i.e;

const promiseDemo = new Promise((res, rej)=>{
        return res('Success')
    })

promiseDemo.then(data=>{
    console.log(data);
    data += 'ful'
    return data
    /*we can notice that the above code is returning the updated data but we can see that we are able to attach a then to another then it 
    means that 
    return data *****also means as below line*****
    return Promise.resolve(data)
    */
}).then(updatedData=>{
    console.log(updatedData)
})
