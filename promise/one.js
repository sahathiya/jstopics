const promise=new Promise((res,rej)=>res('success'))

promise.then((response)=>console.log(response))
.catch((err)=>console.log(err))
.finally(()=>console.log("promise completed"))