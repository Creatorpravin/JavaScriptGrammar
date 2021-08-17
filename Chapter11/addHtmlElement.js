//add 10 elements to the page
for(let i=1;i<11;i++){
    //create new html element
    let element=document.createElement("div");
    //insert inner html into the element
    element.innerHTML="element"+i;
    //add the created element to the document
    document.body.appendChild(element);
}