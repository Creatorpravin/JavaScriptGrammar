"use strict";
//give input range for find prime number
const start = 1;
const end = 200;
//convert input value to string
const startConvertToString = start + "" ;
const endConvertToString = end + "" ;
//listOfPrimeNumber function definition
function listOfPrimeNumber(s,e){
    for( let number = s ; number <= e ; number++ ){ 
        let flag = true; 
        if( number === 1 ){
            flag = false;
        }else{ 
        // looping through 2 to number-1
            for ( let i = 2; i < number; i++ ){
                if ( number % i == 0 ) {
                    flag = false;
                    break;
                }
            }
        } 
        if(flag)
           console.log(number);  
    }
}  
// check if type of value is number or not 
if(typeof start === "number" && typeof end === "number"){
    if(startConvertToString.indexOf(".") === -1 && endConvertToString.indexOf(".") === -1){
    //if(start.toString().indexOf(".") === -1 && end.toString().indexOf(".") === -1 ){
        if( start > 0 && end > 0 ){
            if(start <= end){
               console.log("Prime numbers between "+ start + " to " + end + " are : ");
               listOfPrimeNumber(start,end);
            }else{
                console.log("The input value range not acctepted");
            } 
        }else{
            console.log("The negative input value not acctepted");
        } 
    }else{
        console.log("The float input value not acctepted");
    } 
}else{
    console.log("The string input value not acctepted");
} 