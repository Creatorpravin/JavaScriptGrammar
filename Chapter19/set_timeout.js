//create callback
let callback = function(){ console.log("event!")};
setTimeout(callback,1000);

callback = function(){ console.log("do something")};
let timer = setTimeout(callback, 1000);
//reset timeout
clearTimeout(timer);
timer = null;