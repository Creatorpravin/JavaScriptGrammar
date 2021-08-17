//sort the string array  
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits);          //["Apple", "Banana", "Mango", "Orange"]  

//sort the numeric array
var points=[2,5,3,56,1,7];
//sort alphabetically
points.sort();
console.log(points);         //[1, 2, 3, 5, 56, 7]
//sort numerically
points.sort(function(x,y){return x-y});
console.log(points);         //[1, 2, 3, 5, 7, 56]
