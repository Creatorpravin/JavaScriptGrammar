var a={prop:[1,2],obj:{}},b={prop:[1,2],obj:{}};
console.log(objcmp(a,b));    //true
console.log(objcmp({a:{b:1}},{a:{b:1}}));  //true
console.log(objcmp({a:[1,2]},{a:[1,2]}));  //true
console.log(objcmp({a:{b:1}},{a:{b:3}}));  //false
console.log(objcmp({a:[1,2]},{a:[1,3]}));  //false

function is_array(value) {
    return typeof value.reduce=="function"&&
           typeof value.filter=="function"&&
           typeof value.map=="function"&&
           typeof value.length=="number";
}

function arrcmp(a,b){
    //one or more values are not arrays:
    if(!(is_array(a)&&is_array(b)))
         return false;
    //not equal by length
    if(a.length!=b.length)
          return false;
    //compare by value
    for(let i=0;i<a.length;i++)
       if(a[i]!==b[i])
         return false;
    return true;     
}

function objcmp(x,y){
    let A=Object.getOwnPropertyNames(x);
    let B=Object.getOwnPropertyNames(y);
    if(A.length!=B.length)
      return false;
    for(let i=0;i<A.length;i++){
         let propName=A[i];
         let p1=x[propName];
         let p2=y[propName];
         if(is_array(p1)&&is_array(p2)){
             if(!arrcmp(p1,p2))
              return false;
         }else
         if(p1.constructor===Object&&p2.constructor===Object){
             if(!objcmp(p1,p2))
               return false;
         }else if(p1 !==p2)    
           return false;
     } 
     return true;
}