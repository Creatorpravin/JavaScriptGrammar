let object={a:1,b:2,c:3,method:()=>{}};
for(let value in object)
  console.log(value,object[value]);
/*
output :
 a 1
 b 2
 c 3
 method ()=>{}
 */