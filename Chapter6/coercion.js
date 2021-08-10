//type coercion
console.log([]==[]);      //false

let l=[];                 
console.log(l==l);        //true

console.log([]==![]);     //true

console.log(true+false);  //1

console.log(NaN==NaN);    //false

const s="text";
console.log(-s);           //NaN

Number("text");            //NaN
Number(1);                 //1

const m=1;
console.log(-m);           //-1
const n=1;
console.log(n);            //1

5+5;                       //10
"5"+5;                     //55
5+"5";                     //55
"5"+"5";                   //55