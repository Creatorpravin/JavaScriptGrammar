//array destructuring
var x, y;
[x, y] = [10, 20];
console.log(x);         // 10
console.log(y);         // 20

//array destructuring with rest
[x, y, ...restof] = [10, 20, 30, 40, 50];
console.log(x);       // 10
console.log(y);       // 20
console.log(restof);  // [30, 40, 50]

// nested array elements
const arrValue = ['one', ['two', 'three']];
// nested destructuring assignment in arrays
const [a, [b, c]] = arrValue;
console.log(a);          // one
console.log(b);          // two
console.log(c);          // three

// program to swap variables
let p = 4;
let q = 7;
// swapping variables
[p, q] = [q, p];
console.log(p);             // 7
console.log(q);             // 4

//Merging arrays with ...spread
let one=[1,2];
let two=[3,4];
let three=[...one,...two];
console.log(three);        //[1,2,3,4s]