function TimeOutToInterval(call,time){
   const id = setTimeout(()=>{
        console.log("Inside TimeOut")
        call(call, time)
    },time)
}

TimeOutToInterval(TimeOutToInterval, 1000)
