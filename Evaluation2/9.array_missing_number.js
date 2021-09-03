"use strict";
var array = [1,2,3,5,6];
var max = Math.max(...array); 
var missing = [];
for (var i = 1; i <= max; i++) {
  if (array.indexOf(i) == -1) {
    missing.push(i);
  }
}
console.log(missing);