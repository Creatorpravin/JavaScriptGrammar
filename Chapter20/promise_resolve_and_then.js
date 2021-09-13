//resolves to "message"
let promise = Promise.resolve("message");
//.then() method receives resolve value
promise.then(function(message){
    console.log("then :" +message);
});