let multi=[1,2,3,[4,5,6,[7,8,9,[10,11,12]]]];
console.log(multi.flat());                  //[1, 2, 3, 4, 5, 6, Array(4)]
console.log(multi.flat().flat());           //[1, 2, 3, 4, 5, 6, 7, 8, 9, Array(3)]
console.log(multi.flat().flat().flat());    //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
console.log(multi.flat(Infinity));          //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
console.log(multi.flat(3));                 //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]