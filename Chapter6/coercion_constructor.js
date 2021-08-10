let a=Boolean(true);    //true
let b=Boolean([]);      //true
let c=Boolean({});      //true
let d=Boolean(false);   //false
let e=Boolean(NaN);     //false
let f=Boolean(null);    //false
let g=Boolean(undefined);//false
let h=Boolean('');       //false
let i=Boolean(0);        //false
let j=Boolean(-0);       //false
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
console.log(h);
console.log(i);
console.log(j);