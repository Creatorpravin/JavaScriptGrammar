"use strict";
let volume = function(length) {
    return function(width) {
       return function(height) {
          return height * width * length;
       };
    };
}
console.log(volume(11)(2)(3));
let h = volume(11)(2);
h(3);
let w = volume(11);
w(2);
h(3);