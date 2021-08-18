//using spread merge the array
var array1=[1,2,9,3,5,1,4,5];
var array2=[11,54,70,40];
var merge=[...array1,...array2];
console.log(merge);     //[1, 2, 9, 3, 5, 1, 4, 5, 11, 54, 70, 40]

//concat method
var array3=[1,2,9,3,5,1,4,5];
var array4=[11,54,70,40];
var merge1=array3.concat(array4);
console.log(merge1);    //[1, 2, 9, 3, 5, 1, 4, 5, 11, 54, 70, 40]
