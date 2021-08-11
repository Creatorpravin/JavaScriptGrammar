//check if a property name exists in an object
console.log("c" in {"a":1,"b":2,"c":3});      //true
console.log(1 in {"a":1,"b":2,"c":3});        //false

//check array if an index exists
console.log("c" in ["a","b","c"]);             //false
console.log(0 in ["a","b","c"]);               //true
console.log(1 in ["a","b","c"]);               //true
console.log(2 in ["a","b","c"]);               //true
console.log(3 in ["a","b","c"]);               //false

//The length property is native to all arrays:
console.log("length" in []);                    //true
console.log("length" in [0,1,2]);               //true

//”length” property does not exist natively on an object unless it’s added explicitly:
console.log("length" in {});                    //false
console.log("length" in {"length":1});          //true

//Check for presence of constructor or prototype property on an object constructor function
console.log("constructor" in Object);           //true 
console.log("prototype" in Object);             //true