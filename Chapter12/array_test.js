function array(value) {
    return typeof value.reduce=="function"&&
           typeof value.filter=="function"&&
           typeof value.map=="function"&&
           typeof value.length=="number";
}
//test the function
console.log(array(1));        //false
console.log(array("string")); //false
console.log(array({a:1}));     //false
console.log(array(true));       //false
console.log(array([]));         //true
console.log(array([1,2,3,4,5]));//true

