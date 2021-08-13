//concatenating array 
let colors = ['Red', 'Yellow'];  
let newColors = [...colors, 'Violet', 'Orange', 'Green'];  
console.log(newColors);        //["Red", "Yellow", "Violet", "Orange", "Green"]

//copying an array
let color = ['Red', 'Yellow'];  
let newColor = [...color];  
console.log(newColor);        //["Red", "Yellow"]

//spread operator and strings
let str = ['A', ...'EIO', 'U'];  
console.log(str);            // ["A", "E", "I", "O", "U"]

//spread operator with object
const obj1 = { x : 1, y : 2 };
const obj2 = { z : 3 };
// add members obj1 and obj2  to obj3
const obj3 = {...obj1, ...obj2};
console.log(obj3);            // {x: 1, y: 2, z: 3}

//Using ...spread outside of arrays, objects or function parameters
let z=...[1,2,3];             //SyntaxError: Unexpected token '...'