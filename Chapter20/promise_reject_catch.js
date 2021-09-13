//reject to "request rejected"
let promise = Promise.reject("Request rejected");
//.then() method receives resolve value
promise.then(function(message){
    console.log("then :" +message);
});
//.cathch method receives reject value
promise.catch(function(error){
    console.log("catch :" +error);
});
//good place for post-promise data clean up 
promise.finally(function(){
    console.log("finally : hide loading animation");
});