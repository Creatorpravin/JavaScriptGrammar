//resolves to "message"
let promise = Promise.resolve("message");
//.then() method receives resolve value
promise.then(function(message){
    console.log("then :" +message);
});
//never called, because we used .resolve method
promise.catch(function(error){
    console.log("catch :" +error);
});


//example 2
let password = "mathilda";
let p = new Promise((resolve,reject) => {
    if(password != "mathilda")
        reject("invalid password"); 
    resolve("correct password");   
});
p.then(function(msg){
    console.log("then : " + msg);
});
p.catch(function(err) {
       console.log("catch : "+err);
});