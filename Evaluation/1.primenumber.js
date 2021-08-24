"use strict";
var number=17;
var flag=true;
var type=typeof number;
// check if type of value is number or not 
if(type==="number"){
   // check if number is equal to 2
   if(number===2){
      console.log(number+" is prime");
   }
   // check if number is less than 2
   else if(number<2){
      console.log("This value is not accept");
   }    
   // check if number is greater than 2
   else{
      // looping through 2 to number-1
      for (let i = 2; i < number; i++){
         if (number % i == 0) {
            flag = false;
            break;
         }
      } 
      console.log((flag)?number+" is prime":number+" is not prime");  
   }
}
else{
   console.log("this is not number");
}
   