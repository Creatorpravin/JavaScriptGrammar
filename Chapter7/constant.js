//constant variable requires assignment on definition
let a;
console.log(a);             //undefined
const b;                    //SyntaxError: Missing initializer in const declaration

//cannot change the value
const value=1;
Value=2;                     //TypeError: Assignment to constant variable.

//const and array
const array=[];
array[0]="a";                //a
array=[];                    //TypeError: Assignment to constant variable.

//const and object
const a={prop:1};            //undefined
console.log(a.prop);         //1
a.prop=2;                    //2
console.log(a.prop);         // 2
a={some:1};                  //TypeError: Assignment to constant variable.
