//reverse a string using in-build type
var string="hello";
var result = reverseString(string);
console.log(string);
console.log("string is reversed :"+result);
function reverseString(str) {
    // return a new array of strings
    var arrayStrings = str.split("");
    // reverse the new created array elements
    var reverseArray = arrayStrings.reverse();
    // join all elements of the array into a string
    var joinArray = reverseArray.join("");
    // return the reversed string
    return joinArray;
}

//reverse a string
 string="good morning";
 result = reverse(string);
console.log(string);
console.log("string is reversed :"+result);
function reverse(str) {
    let reversedString="";
    for(let i=str.length-1;i>=0;i--){
        reversedString +=str[i];
    }
    return reversedString;
}