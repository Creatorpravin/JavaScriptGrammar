let array=[1,2,3,4,5];
let Map=array.map(x=>[x,x*2]);
let flat_map=array.flatMap(v=>[v,v*2]);
console.log(Map);
console.log(flat_map);   //[1, 2, 2, 4, 3, 6, 4, 8, 5, 10]