"use strict";
//input array to find common number in array
const array1 = [1,2,3,4,5];
const array2 = [2,4,8,10,15];
//function definition for find common number
function commonNumber(array1, array2) {
    let common = []; 
    for ( let i = 0; i < array1.length; i++ ) {
      for ( let j = 0; j < array2.length; j++ ) {
        if ( array1[i] === array2[j] ) { 
          common.push(array1[i]); 
        }
      }
    }
   console.log(common); 
}
//call the common number function pass the two input array 
commonNumber(array1, array2); 