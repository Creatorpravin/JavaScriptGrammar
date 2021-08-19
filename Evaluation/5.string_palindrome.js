var string="malayalam";
function reverseString(str) {
    var arrayStrings = str.split("");
    var reverseArray = arrayStrings.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
}
var result = reverseString(string);
if(result===string){
    console.log("given string is palindrome");
}else{
    console.log("given string is not palindrome");  
}
//another type
var string1="level";
function reverse(str) {
    let reversedString="";
    for(let i=str.length-1;i>=0;i--){
        reversedString +=str[i];
    }
    return reversedString;
}
var result1 = reverseString(string1);
if(result1===string1){
    console.log("given string is palindrome");
}else{
    console.log("given string is not palindrome");
}
