//normal for loop
var array1=["a","b","c"];
var result=array1.entries();
for(let i=0;i<array1.length;i++){
    console.log(result.next().value);  //[0,"a"] [1,"b"] [2,"c"]
}
//for..of loop
var array2=["a","b","c"];
var result1=array2.entries();
for(let x of result1){
    console.log(x);                     //[0,"a"] [1,"b"] [2,"c"]
}