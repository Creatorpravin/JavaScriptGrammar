let promise = new Promise(function(resolve,reject) {
    let condition = true;
    if(condition)
        resolve("message");
    else       
        reject("error deails"); 
}).then(function(msg){
    console.log("then : " + msg);
}).catch(function(err) {
       console.log("catch : "+err);
}).finally(()=>console.log("finally."));


//another example
let takeTheTrashOut = new Promise((resolve, reject)=>{
    //do the work
    let trash_is_out = take_trash_out();
    //handle the return value
    if(!trash_is_out)
      reject("No");
    else
       resolve("Yes");  
});
//resolve Promise using then and catch methods
takeTheTrashOut.then(function(fromResolve){
    console.log("Is the trash out? Answer = " +fromResolve);
}).catch(function(fromReject){
    console.log("Is the trash out? Answer = " +fromReject);
});