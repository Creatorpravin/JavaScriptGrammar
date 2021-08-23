var string="malayalam";
var result = reverseString(string);
if(result===string){
    console.log("given string is palindrome");
}else{
    console.log("given string is not palindrome");  
}
function reverseString(str) {
    var arrayStrings = str.split("");
    var reverseArray = arrayStrings.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
}

//another type
string="level";
 result = reverse(string);
if(result===string){
    console.log("given string is palindrome");
}else{
    console.log("given string is not palindrome");
}
function reverse(str) {
    let reversedString="";
    for(let i=str.length-1;i>=0;i--){
        reversedString +=str[i];
    }
    return reversedString;
}