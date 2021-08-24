let f=()=>{
    console.log(arguments);   
}
function Function(){
    console.log(arguments);
}
Function();         //Arguments [callee: ƒ, Symbol(Symbol.iterator): ƒ]
f();                //ReferenceError: arguments is not defined
