//another type click event
var clicked = function(){
    console.log("Document is clicked.")
}
document.addEventListener("click",clicked);
document.removeEventListener("click",clicked);

//another type click event
var mouse = function(){
    console.log(Math.random());
}
var clicked = function(){
    //add mousemove event
    document.removeEventListener("mousemove",mouse);
    //add click event
    document.removeEventListener("click",clicked);
    console.log("stop");
}
//add mousemove event
document.addEventListener("mousemove",mouse);
//add click event
document.addEventListener("click",clicked);
