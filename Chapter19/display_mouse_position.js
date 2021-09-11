//mousemove event
window.onmousemove = function(event){
    //get mouse coordinates relative to the document
    let mouseX = event.pageX;
    let mouseY = event.pageY;
    //get mouse coordinates relative to element area
    let localX = event.clientX;
    let localY = event.clientY;
    console.log(localX, localY, mouseX, mouseY);
}
//click event
window.onclick = function(event){
    //get mouse coordinates relative to the document
    let mouseX = event.pageX;
    let mouseY = event.pageY;
    //get mouse coordinates relative to element area
    let localX = event.clientX;
    let localY = event.clientY;
    console.log(localX, localY, mouseX, mouseY);
}

