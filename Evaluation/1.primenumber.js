var number=17,flag=true;
   // check if number is equal to 1
   if(number===1){
      console.log(number+" is prime");
   }
   // check if number is greater than 1
   else if(number>1){
      // looping through 2 to number-1
   for (let i = 2; i < number; i++){
      if (number % i == 0) {
         flag = false;
         break;
      }
   }     
   if (flag == true){
      console.log(number + " is prime");
   }else{
      console.log(number + " is not prime");
   }
   }
   // check if number is less than 1
   else if(number<1){
      console.log("Zero and Negative value is not accept");
   }    