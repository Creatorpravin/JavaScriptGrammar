"use strict";
var start = 1;
var end = 1;
var start_type = typeof start;
var end_type = typeof end;
var startConvertToString = start + "" ;
var endConvertToString = end + "" ;
// check if type of value is number or not 
if(start_type === "number" && startConvertToString.indexOf(".")===-1 && end_type==="number" && endConvertToString.indexOf(".")===-1 && start > 0 && end > 0 && start <= end){
    console.log("prime number "+start+" to " +end+ " are : ");
    isprime(start,end);
}else{
    console.log("this value not acctepted");
}
//isprime function
function isprime(s,e){
    for(let number = s ; number <= e ; number++ ){ 
        var flag = true; 
        if(number === 1){
            flag = false;
        }else{ 
        // looping through 2 to number-1
            for (let i = 2; i < number; i++){
                if (number % i == 0) {
                    flag = false;
                    break;
                }
            }
        } 
        if(flag)
           console.log(number);  
    }
}   





    



