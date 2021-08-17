//increament the value using normal loop method 
let miles=[5,12,75,2,5];
//add up all numbers using a for loop
let a=0;
for(let i=0;i<5;i++){
    a+=miles[i];
}
console.log(a);                         //99

//using reducer function
let mile=[10,20,30,40];
const result=(accumulator,currentValue)=>accumulator+currentValue;
//10+20+30+40
console.log(mile.reduce(result));       //100      
//50+10+20+30+40
console.log(mile.reduce(result,50));    //150