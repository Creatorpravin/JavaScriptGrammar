let a={p:1};
let b=a;
let c=b;
let d=c;
console.log(d.p);
a.p=10;
console.log(d.p);