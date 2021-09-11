let password = "felix";
let p = new Promise((resolve,reject) => {
    if(password != "mathilda")
       return reject("invalid password");
    resolve();   
});