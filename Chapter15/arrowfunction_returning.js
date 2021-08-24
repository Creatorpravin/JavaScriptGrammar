let a=x=>"returns";
let b=x=>{return "returns";}
let c=x=>{return random()>=0.5}
let d=x=>{"won't return";}

console.log(a(1));    //returns
console.log(b(1));    //returns
console.log(d(1));    //undefined

//be careful when using with higher-order functions
let e=[1];
e.map(a);   //returns
e.map(b);   //returns
e.map(d);   //undefined

