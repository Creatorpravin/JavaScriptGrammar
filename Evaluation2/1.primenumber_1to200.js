"use strict";
//give input range for find prime number
const start = 1;
const end = 200;
//get the type of input value and store variable
const start_type = typeof start;
const end_type = typeof end;
//convert input value to string
const startConvertToString = start + "" ;
const endConvertToString = end + "" ;
//listOfPrimeNumber function
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
if(start_type === "number" && startConvertToString.indexOf(".") === -1 && end_type === "number" && endConvertToString.indexOf(".") === -1 && start > 0 && end > 0 && start <= end){
    console.log("prime number "+start+" to " +end+ " are : ");
    listOfPrimeNumber(start,end);
}else{
    console.log("This input value not acctepted");
} 





    



