"use strict";
let value = "";
let k=1;
for (let i = 1;i < 5;i++) {
  for (let j = 0;j < i;j++) {
    value+=k;
    k++;
    value +=" ";
  }
  value +="\n";
}
console.log(value);   

