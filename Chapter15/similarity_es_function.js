function function1(){
    console.log("function one");
    console.log(this);
}
var function2=function(){
    console.log("function two");
    console.log(this);
}
var arrow=()=>{
    console.log("arrow function");
    console.log(this);
}
console.log(function1());
console.log(function2());
console.log(arrow());