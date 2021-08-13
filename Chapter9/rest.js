function show(...args) {  
  let sum = 0;  
  for (let i of args) {  
      sum += i;  
  }  
  console.log("Sum = "+sum);  //60
}  
  show(10, 20, 30);  

//arrow function
let print = item=>console.log(item);
let f=(...items)=>items.map(print);
f(1,2,3,4,5);

// destructuring assignment  in rest
var colors = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"];    
// destructuring assignment    
var [a,b,...args] = colors;    
console.log(a);     
console.log(b);     
console.log(args);
console.log(args[0]);
console.log(args.length);
console.log(args.indexOf('Blue'));
