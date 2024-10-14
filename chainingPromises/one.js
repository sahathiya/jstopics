const promise1=new Promise((res,rej)=>res('first'))
const promise2=new Promise((res,rej)=>res('second'))
const promise3=new Promise((res,rej)=>res('third'))

promise1.then((res)=>{
    console.log(res);
    return promise2
    
}).then((res)=>{
    console.log(res);
    return promise3
    
}).then((res)=>{
    console.log(res);
    
})