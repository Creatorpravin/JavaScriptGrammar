//With Higher-order function reduce
const arr = [5, 7, 1, 8, 4];
const sum = arr.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
});
// prints 25
console.log(sum);

//Without Higher-order function
const arr1 = [5, 7, 1, 8, 4];
let sum1 = 0;
for(let i = 0; i < arr1.length; i++) {
  sum1 = sum1 + arr[i];
}
// prints 25
console.log(sum1);