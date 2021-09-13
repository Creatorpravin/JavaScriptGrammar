let password = "felix";
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
p.finally(function(){
    console.log("finally : hide loading animation");
});