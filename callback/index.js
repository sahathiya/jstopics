function greet(name,callback){
    callback(`hello ${name}`);
    
}

function callback(message){
    console.log(message,'call');
    
}

greet('alice',callback)