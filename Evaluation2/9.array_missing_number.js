"use strict";
const array = [1,2,3,5,6];
const max = Math.max(...array); 
let missing = [];
for (var i = 1; i <= max; i++) {
  if (array.indexOf(i) === -1) {
    missing.push(i);
  }
}
console.log(missing);