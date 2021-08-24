"use strict";
//using in-build function
var str  = "sample string";
var type=typeof str;
if(type==="string"){
    console.log("before reverse sentence :"+str);  //before reverse sentence :sample string
    str = str.split(" ");
    str.reverse();
    str = str.join(" ");
    console.log("after reverse sentence :"+str);       //after reverse sentence :string sample
}else{
    console.log("this is not string!");
}

//reverse sentence word
str="good morning";
type=typeof str;
if(type==="string"){
    var result=reverse_sentence(str);
    console.log("before reverse sentence :"+str);       //before reverse sentence :good morning
    console.log("after reverse sentence :"+result);       //after reverse sentence :morning good
}else{
    console.log("this is not string!");
}
function reverse_sentence(str){
    var sentence="";
    var wordArray=str.split(" ");
    for(let i=wordArray.length-1;i>=0;i--){
        sentence += wordArray[i]+" ";
    }
    return sentence;
}