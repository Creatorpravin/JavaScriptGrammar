"use strict";
//using spread merge the array
var array1=[1,2,9,3,5,1,4,5];
var array2=[11,54,70,40];
var merge=[...array1,...array2];
console.log(merge);     //[1, 2, 9, 3, 5, 1, 4, 5, 11, 54, 70, 40]

//concat method
array1=[10,20,90,30,5,1,4,5];
array2=[11,54,70,40];
merge=array1.concat(array2);
console.log(merge);    //[10, 20, 90, 30, 5, 1, 4, 5, 11, 54, 70, 40]
