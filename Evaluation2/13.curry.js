"use strict";
var volume=function(length) {
    return function(width) {
       return function(height) {
          return height * width * length;
       };
    };
}
console.log(volume(11)(2)(3));
var h=volume(11)(2);
h(3);
var w=volume(11);
w(2);
h(3);