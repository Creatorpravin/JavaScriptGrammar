//create callback
let callback = function(){ console.log("event!")};
let interval = setInterval(callback, 1000);
//reset interval
clearInterval(interval);
interval = null;