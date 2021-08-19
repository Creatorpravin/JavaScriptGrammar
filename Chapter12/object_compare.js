var a={prop:[1,2],obj:{}},b={prop:[1,2],obj:{}};
console.log(objcmp(a,b));     
 
function objcmp(x,y){
    let A=Object.getOwnPropertyNames(x);
    let B=Object.getOwnPropertyNames(y);
    if(A.length!=B.length)
      return false;
    for(let i=0;i<A.length;i++){
         let propName=A[i];
         if(x[propName]!==y[propName])
           return false;
     } 
     return true;
}