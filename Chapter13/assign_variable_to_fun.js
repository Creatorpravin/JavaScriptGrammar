let print=function (){
    console.log("print something in 1 second.");  //print something in 1 second.
    console.log(arguments);
}

let clicked=function (){
    console.log("Document was clicked.");
    console.log(arguments);
}
print();
clicked();

//cleaner code 
setTimeout(print,1000);
document.addEventListener("click",clicked);

let clicked=function(event) {
    console.log(event,event.target);
}

