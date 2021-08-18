//using in-build function
var str  = "sample string";
console.log("before reverse sentence :"+str);  //before reverse sentence :sample string
var arr = str.split(" ");
arr.reverse();
str = arr.join(" ");
console.log("after reverse sentence :"+str);       //after reverse sentence :string sample


//reverse sentence word
var string="good morning"
function reverse_sentence(str){
    var sentence="";
    var wordArray=str.split(" ");
    for(let i=wordArray.length-1;i>=0;i--){
        sentence += wordArray[i]+" ";
    }
    return sentence;
}
var result=reverse_sentence(string)
console.log("before reverse sentence :"+string);       //before reverse sentence :good morning
console.log("after reverse sentence :"+result);       //after reverse sentence :morning good