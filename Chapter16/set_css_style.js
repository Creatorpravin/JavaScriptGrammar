//create a <div> element dynamically
let div =document.createElement("div");

//set ID of the element
div.setAttribute("id","element");

//set class attribute of the element
div.setAttribute("class","box");

//set element's CSS style via style property
div.style.position="absolute";
div.style.display="block";
div.style.width="100px";
div.style.height="100px";
div.style.top=0;
div.style.left=0;
div.style.zIndex=1000;
div.style.borderStyle="solid";
div.style.borderColor="gray";
div.style.borderWidth="1px";
div.style.backgroundColor="white";
div.style.color="black";

//Insert the element into the body tag using appendChild method:
document.body.appendChild(div);