//create event details payload
let info = { detail: {position:[125, 210],info:"map location"} };
//create new event of custom type "pin"
let eventPin = new CustomEvent("pin", info);
//create callback
let callback = function(event){ console.log(event);};
//start listening for pin event
document.addEventListener("pin",callback);
//manualy dispatch the event1
document.dispatchEvent(eventPin);