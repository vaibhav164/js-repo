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
