//for...of and Objects
let object={a:1,b:2,c:3};
for(let value of object)  //TypeError: object is not iterable
   console.log(value);

//for...of loops and objects converted to iterables  
let enumerable={property:1,method:()=>{}};
//print key here
for(let key of Object.keys(enumerable))
    console.log(key);       //property  method
//print value here    
for(let value of Object.values(enumerable))
    console.log(value);     //1  ()=>{}
//print the entries 
for(let entry of Object.entries(enumerable))
    console.log(entry);      // ["property",1]    ["method",f]

