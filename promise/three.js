

const promise1=new Promise((res,rej)=>res('success'))

const promise2=new Promise((res,rej)=>res('success'))

const promise3=new Promise((res,rej)=>rej('failed'))

 Promise.allSettled([promise1,promise2,promise3])
.then((response)=>console.log(response))
.catch((err)=>console.log(err))