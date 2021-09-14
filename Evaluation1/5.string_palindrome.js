"use strict";
var string="malayalam";
var type=typeof string;
string=string.toLowerCase();
if(type==="string"){
    var result = reverseString(string);
    console.log((result==string)?"given string is palindrome":"given string is not palindrome");
}
else{
    console.log("this is not string!");
}
function reverseString(str) {
    var arrayStrings = str.split("");
    var reverseArray = arrayStrings.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
}

//another type
string="level";
type=typeof string;
string=string.toLowerCase();
if(type==="string"){
    result = reverse(string);
    console.log((result==string)?"given string is palindrome":"given string is not palindrome");
}
else{
    console.log("this is not string!");
}
function reverse(str) {
    let reversedString="";
    for(let i=str.length-1;i>=0;i--){
        reversedString +=str[i];
    }
    return reversedString;
}