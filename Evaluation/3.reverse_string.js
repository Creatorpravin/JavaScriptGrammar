//reverse a string using in-build type
var string="good morning";
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
var result1 = reverseString(string);
console.log(string);
console.log("string is reversed :"+result);

//reverse a string
var string1="good morning";
function reverse(str) {
    let reversedString="";
    for(let i=str.length-1;i>=0;i--){
        reversedString +=str[i];
    }
    return reversedString;
}
var result1 = reverse(string1);
console.log(string1);
console.log("string is reversed :"+result1);