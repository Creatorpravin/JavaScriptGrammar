"use strict";
var array1=[1,2,3,4,5];
var array2=[2,4,8,10,15];
commonNumber(array1, array2); 

function commonNumber(array1, array2) {
    var common = []; 
    for (var i = 0; i < array1.length; i++) {
      for (var j = 0; j < array2.length; j++) {
        if (array1[i] == array2[j]) { 
          common.push(array1[i]); 
        }
      }
    }
   console.log(common); 
  }

   