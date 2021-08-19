let number=[0,1,256,3,4,5,6,7];
let result=number.map(value=>value=value+1);
console.log(result);    //[1, 2, 257, 4, 5, 6, 7, 8]
console.log(number);    //[0, 1, 256, 3, 4, 5, 6, 7] original array unchanged